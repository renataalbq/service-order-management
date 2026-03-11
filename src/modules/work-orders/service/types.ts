import { WorkOrder } from "../types";

export type SyncResult = {
  success: boolean;
  pushed: number;
  pulled: number;
  errors: string[];
};

export type LocalWorkOrder = WorkOrder & {
  needsSync: boolean;
  localOnly: boolean;
};