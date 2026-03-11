import { StateCreator } from "zustand";
import { SyncSlice } from "./types";
import { syncWorkOrders } from "../../service";

export const createSyncSlice: StateCreator<SyncSlice> = (set, get) => ({
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

    return result;
  },

  setOnline: (online) => set({ isOnline: online }),
});