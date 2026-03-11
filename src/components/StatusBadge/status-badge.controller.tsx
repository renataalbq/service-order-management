import React from "react";
import { IProps } from "./status-badge.types";
import { WorkOrderStatus } from "../../modules/work-orders";
import { colors } from "../../theme";
import { StatusBadgeView } from "./status-badge.view";

const CONFIG: Record<WorkOrderStatus, { label: string; color: string; bg: string }> = {
  Pending:       { label: "Pendente",     color: colors.pending,    bg: colors.pendingBg },
  "In Progress": { label: "Em progresso", color: colors.inProgress, bg: colors.inProgressBg },
  Completed:     { label: "Concluído",   color: colors.completed,  bg: colors.completedBg },
};

export const StatusBadge: React.FC<IProps> = (props) => {
  const { status } = props;

  const cfg = CONFIG[status];

  return (
    <StatusBadgeView 
      {...props}
      config={cfg}
    />
  );
};
