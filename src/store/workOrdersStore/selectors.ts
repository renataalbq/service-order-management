import { Store } from "../index";

export const selectOrders = (state: Store) => state.orders;

export const selectCompletedOrders = (state: Store) =>
  state.orders.filter((o) => o.completed);

export const selectLoading = (state: Store) => state.isLoading;