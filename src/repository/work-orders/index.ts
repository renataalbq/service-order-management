import Realm from "realm";
import { realm } from "../../database/realm";
import { WorkOrder } from "../../types";

export function getWorkOrders(): WorkOrder[] {
  const results = realm
    .objects<WorkOrder>("WorkOrder")
    .filtered("deleted == false")
    .sorted("updatedAt", true);
  return Array.from(results).map(toPlain);
}

export function getWorkOrderById(id: string): WorkOrder | null {
  const obj = realm.objectForPrimaryKey<WorkOrder>("WorkOrder", id);
  return obj ? toPlain(obj) : null;
}

export function createWorkOrder(order: WorkOrder): void {
  realm.write(() => {
    realm.create("WorkOrder", {
      ...order,
      localOnly: true,
      needsSync: true,
    });
  });
}

export function updateWorkOrder(id: string, changes: Partial<WorkOrder>): void {
  realm.write(() => {
    realm.create(
      "WorkOrder",
      { id, ...changes, needsSync: true },
      Realm.UpdateMode.Modified
    );
  });
}

export function deleteWorkOrder(id: string): void {
  const obj = realm.objectForPrimaryKey<WorkOrder>("WorkOrder", id);
  if (!obj) return;
  realm.write(() => {
    (obj as any).deleted = true;
    (obj as any).deletedAt = new Date().toISOString();
    (obj as any).updatedAt = new Date().toISOString();
    (obj as any).needsSync = true;
  });
}

function toPlain(obj: WorkOrder): WorkOrder {
  return {
    id: obj.id,
    title: obj.title,
    description: obj.description,
    status: obj.status,
    assignedTo: obj.assignedTo,
    createdAt: obj.createdAt,
    updatedAt: obj.updatedAt,
    deletedAt: obj.deletedAt,
    completed: obj.completed,
    deleted: obj.deleted,
    localOnly: (obj as any).localOnly,
    needsSync: (obj as any).needsSync,
  };
}