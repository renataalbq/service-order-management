import { WorkOrderStatus } from "../../modules/work-orders";

export type IProps = {
  status: WorkOrderStatus;
  config: {
    label: string;
    color: string;
    bg: string;
  }
  size?: "sm" | "md"
};
