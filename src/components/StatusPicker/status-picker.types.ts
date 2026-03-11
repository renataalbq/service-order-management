import { WorkOrderStatus } from "../../types";

export type IProps = {
  value: WorkOrderStatus;
  onChange: (s: WorkOrderStatus) => void;
};
