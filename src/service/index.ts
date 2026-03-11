import Realm from "realm";
import { apiFetch } from "../api/client";
import { realm } from "../database/realm";
import { WorkOrder, SyncResponse } from "../types";
import { LocalWorkOrder, SyncResult } from "./types";

let lastSync = "";
let isSyncing = false;

export async function syncWorkOrders(): Promise<SyncResult> {
  if (isSyncing) {
    return { success: false, pushed: 0, pulled: 0, errors: ["Already syncing"] };
  }
  isSyncing = true;
  const errors: string[] = [];
  let pushed = 0;
  let pulled = 0;

  try {
    pushed = await pushChanges(errors);
    pulled = await pullChanges(errors);
  } finally {
    isSyncing = false;
  }

  return { success: errors.length === 0, pushed, pulled, errors };
}

async function pushChanges(errors: string[]): Promise<number> {
  const pending = Array.from(
    realm.objects<LocalWorkOrder>("WorkOrder").filtered("needsSync == true")
  );
  let count = 0;

  for (const order of pending) {
    try {
      const isDeleted = (order as any).deleted;
      const isLocalOnly = (order as any).localOnly;

      if (isDeleted && !isLocalOnly) {
        await apiFetch(`/work-orders/${order.id}`, { method: "DELETE" });

        realm.write(() => {
          (order as any).needsSync = false;
        });

      } else if (isLocalOnly) {
        const plain = toPlain(order);

        const { localOnly, needsSync, deleted, deletedAt, ...payload } = plain as any;

        const created = await apiFetch<WorkOrder>("/work-orders", {
          method: "POST",
          body: JSON.stringify(payload),
        });

        realm.write(() => {
          const localObj = realm.objectForPrimaryKey("WorkOrder", order.id);
          if (localObj) {
            realm.delete(localObj);
          }
          realm.create(
            "WorkOrder",
            {
              ...toPlain(created),
              id: String(created.id),
              localOnly: false,
              needsSync: false,
            },
            Realm.UpdateMode.Modified
          );
        });

      } else {
        const serverOrder = await apiFetch<WorkOrder>(
          `/work-orders/${order.id}`
        ).catch(() => null);

        if (serverOrder) {
          const serverTs = new Date(serverOrder.updatedAt).getTime();
          const localTs = new Date(order.updatedAt).getTime();

          if (serverTs > localTs) {
            realm.write(() => {
              realm.create(
                "WorkOrder",
                { ...toPlain(serverOrder), localOnly: false, needsSync: false },
                Realm.UpdateMode.Modified
              );
            });
            errors.push(`Conflito: "${order.title}" — versão do servidor mantida`);
            continue;
          }
        }

        const payload = toPlain(order);
        await apiFetch(`/work-orders/${order.id}`, {
          method: "PUT",
          body: JSON.stringify(payload),
        });

        realm.write(() => {
          (order as any).needsSync = false;
          (order as any).localOnly = false;
        });
      }

      count++;
    } catch (err) {
      errors.push(
        `Erro ao processar "${order.title}": ${
          err instanceof Error ? err.message : String(err)
        }`
      );
    }
  }

  return count;
}

async function pullChanges(errors: string[]): Promise<number> {
  let count = 0;
  try {
    const since = lastSync || new Date(0).toISOString();
    const data = await apiFetch<SyncResponse>(
      `/work-orders/sync?since=${encodeURIComponent(since)}`
    );

    realm.write(() => {
      for (const order of data.created) {
        const existing = realm.objectForPrimaryKey<WorkOrder>(
          "WorkOrder",
          String(order.id)
        );
        if (existing && !(existing as any).needsSync) {
          continue;
        }

        realm.create(
          "WorkOrder",
          { ...order, id: String(order.id), localOnly: false, needsSync: false },
          Realm.UpdateMode.Modified
        );
        count++;
      }

      for (const order of data.updated) {
        const local = realm.objectForPrimaryKey<WorkOrder>(
          "WorkOrder",
          String(order.id)
        );

        if (local && (local as any).needsSync) {
          const localTs = new Date(local.updatedAt).getTime();
          const serverTs = new Date(order.updatedAt).getTime();
          if (localTs >= serverTs) continue;
        }

        realm.create(
          "WorkOrder",
          { ...order, id: String(order.id), localOnly: false, needsSync: false },
          Realm.UpdateMode.Modified
        );
        count++;
      }

      for (const rawId of data.deleted) {
        const id = String(rawId);
        const item = realm.objectForPrimaryKey<WorkOrder>("WorkOrder", id);
        if (item) {
          (item as any).deleted = true;
          (item as any).needsSync = false;
          count++;
        }
      }
    });

    lastSync = new Date().toISOString();
  } catch (err) {
    errors.push(
      `Erro ao receber dados: ${err instanceof Error ? err.message : String(err)}`
    );
  }
  return count;
}

function toPlain(obj: any): WorkOrder {
  return {
    id: String(obj.id),
    title: obj.title,
    description: obj.description,
    status: obj.status,
    assignedTo: obj.assignedTo,
    createdAt: obj.createdAt,
    updatedAt: obj.updatedAt,
    deletedAt: obj.deletedAt ?? null,
    completed: obj.completed,
    deleted: obj.deleted,
  };
}