import { WorkOrderFormData } from "../work-order-form.types";

export type Errors = Partial<Record<keyof WorkOrderFormData, string>>;

export function validateForm(data: WorkOrderFormData): Errors {
  const error: Errors = {};

  if (!data.title.trim()) {
    error.title = "O título é obrigatório";
  }

  if (!data.description.trim()) {
    error.description = "A descrição é obrigatória";
  }

  if (!data.assignedTo.trim()) {
    error.assignedTo = "O nome do técnico é obrigatório";
  }

  return error;
}
