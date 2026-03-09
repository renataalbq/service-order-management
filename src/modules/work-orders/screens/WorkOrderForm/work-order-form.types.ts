import { WorkOrder } from "../../types";
import { Errors } from "./library/validateForm";

export type IProps = {
  form: WorkOrderFormData;
  errors: Errors;
  saving: boolean;
  isEditing: boolean;
  onChangeField: <K extends keyof WorkOrderFormData>(key: K, value: WorkOrderFormData[K]) => void;
  onSave: () => void;
};

export type WorkOrderFormData = Pick<
  WorkOrder,
  "title" | "description" | "status" | "assignedTo"
>
