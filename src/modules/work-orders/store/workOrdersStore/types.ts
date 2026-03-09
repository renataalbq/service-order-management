import { WorkOrderFormData } from "../../screens/WorkOrderForm/work-order-form.types";
import { WorkOrder } from "../../types";

export interface WorkOrdersSlice {
  orders: WorkOrder[];
  isLoading: boolean;

  loadOrders: () => void;
  createOrder: (data: WorkOrderFormData) => void;
  updateOrder: (id: string, data: Partial<WorkOrderFormData>) => void;
  deleteOrder: (id: string) => void;
}
