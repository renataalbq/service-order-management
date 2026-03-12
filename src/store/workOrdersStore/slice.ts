import { StateCreator } from "zustand";
import { v4 as uuidv4 } from "uuid";
import * as repository from "../../repository/work-orders";
import { WorkOrder } from "../../types";
import { WorkOrdersSlice } from "./types";

const now = () => new Date().toISOString();

export const createWorkOrdersSlice: StateCreator<WorkOrdersSlice> = (set) => ({
  orders: [],
  isLoading: false,

  loadOrders: () => {
    set({ isLoading: true });
    const orders = repository.getWorkOrders();
    set({ orders, isLoading: false });
  },

  createOrder: (data) => {
    const order: WorkOrder = {
      id: uuidv4(),
      ...data,
      completed: data.status === "Completed",
      deleted: false,
      createdAt: now(),
      updatedAt: now(),
    };
    repository.createWorkOrder(order);

    set((state) => ({
      orders: [
        { ...order, localOnly: true, needsSync: true } as WorkOrder,
        ...state.orders,
      ],
    }));
  },

  updateOrder: (id, data) => {
    const updatedAt = now();
    repository.updateWorkOrder(id, { ...data, updatedAt });

    set((state) => {
      const updated = state.orders.map((order) =>
        order.id === id
          ? {
              ...order,
              ...data,
              completed: (data.status ?? order.status) === "Completed",
              updatedAt,
              needsSync: true,
            }
          : order
      );

      const idx = updated.findIndex((order) => order.id === id);
      if (idx > 0) {
        const [item] = updated.splice(idx, 1);
        updated.unshift(item);
      }

      return { orders: updated };
    });
  },

  deleteOrder: (id) => {
    repository.deleteWorkOrder(id);
    set((state) => ({
      orders: state.orders.filter((order) => order.id !== id),
    }));
  },
});