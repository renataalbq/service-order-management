import { create } from "zustand";
import { createWorkOrdersSlice, WorkOrdersSlice } from "./workOrdersStore";

export type Store = WorkOrdersSlice;

export const useStore = create<Store>()((...a) => ({
  ...createWorkOrdersSlice(...a),
}));