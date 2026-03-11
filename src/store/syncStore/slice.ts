import { StateCreator } from "zustand";
import { SyncSlice } from "./types";
import { syncWorkOrders } from "../../service";
import { Store } from "..";

export const createSyncSlice: StateCreator<Store, [], [], SyncSlice> = (
  set,
  get
) => ({
  syncStatus: "idle",
  syncErrors: [],
  lastSyncedAt: null,
  isOnline: false,

  sync: async () => {
    set({ syncStatus: "syncing", syncErrors: [] });
    const result = await syncWorkOrders();

    set({
      syncStatus: result.success ? "success" : "error",
      syncErrors: result.errors,
      lastSyncedAt: new Date(),
    });

    get().loadOrders();

    return result;
  },

  setOnline: (online) => set({ isOnline: online }),
});