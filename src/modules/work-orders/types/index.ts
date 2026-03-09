export type WorkOrderStatus = "Pending" | "In Progress" | "Completed";

export type WorkOrder = {
  id: string;
  title: string;
  description: string;
  status: WorkOrderStatus;
  assignedTo: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
  completed: boolean;
  deleted: boolean;
  localOnly?: boolean;
  needsSync?: boolean;
};

export type SyncResponse = {
  created: WorkOrder[];
  updated: WorkOrder[];
  deleted: (string | number)[];
};