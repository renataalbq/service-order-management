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
        ...state.orders,
        { ...order, localOnly: true, needsSync: true } as WorkOrder,
      ],
    }));
  },

  updateOrder: (id, data) => {
    repository.updateWorkOrder(id, data);
    set((state) => ({
      orders: state.orders.map((order) =>
        order.id === id
          ? {
              ...order,
              ...data,
              completed: (data.status ?? order.status) === "Completed",
              updatedAt: now(),
              needsSync: true,
            }
          : order
      ),
    }));
  },

  deleteOrder: (id) => {
    repository.deleteWorkOrder(id);
    set((state) => ({
      orders: state.orders.filter((order) => order.id !== id),
    }));
  },
});