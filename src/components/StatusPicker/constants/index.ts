import { colors } from "../../../theme";
import { WorkOrderStatus } from "../../../types";

export const STATUS: WorkOrderStatus[] = ["Pending", "In Progress", "Completed"];

export const LABELS: Record<WorkOrderStatus, string> = {
  Pending: "Pendente",
  "In Progress": "Em andamento",
  Completed: "Concluído",
};

export const ACTIVE: Record<WorkOrderStatus, { color: string; bg: string }> = {
  Pending:       { color: colors.pending,    bg: colors.pendingBg },
  "In Progress": { color: colors.inProgress, bg: colors.inProgressBg },
  Completed:     { color: colors.completed,  bg: colors.completedBg },
};