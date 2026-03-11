import { WorkOrderStatus } from "../../types";

export type IProps = {
  status: WorkOrderStatus;
  config?: {
    label: string;
    color: string;
    bg: string;
  }
  size?: "sm" | "md"
};
