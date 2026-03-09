import { WorkOrderStatus } from "../../modules/work-orders";

export type IProps = {
  value: WorkOrderStatus;
  onChange: (s: WorkOrderStatus) => void;
};
