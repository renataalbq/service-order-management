import { WorkOrder } from "../../types";

export type IProps = {
  order: WorkOrder;
  onEdit: () => void;
  onDelete: () => void;
  navigation: any
};
