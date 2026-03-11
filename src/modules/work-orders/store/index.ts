import { create } from "zustand";
import { createWorkOrdersSlice, WorkOrdersSlice } from "./workOrdersStore";
import { createSyncSlice, SyncSlice } from "./syncStore";

export type Store = WorkOrdersSlice & SyncSlice;

export const useStore = create<Store>()((...a) => ({
  ...createWorkOrdersSlice(...a),
  ...createSyncSlice(...a),
}));