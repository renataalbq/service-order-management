import { IFilter } from "../work-order-list.types";

export const FILTER_LABELS: Record<IFilter, string> = {
  All: "Todas",
  Pending: "Pendentes",
  "In Progress": "Em progresso",
  Completed: "Concluídas",
};

export const FILTERS: (IFilter)[] = [
  "All",
  "Pending",
  "In Progress",
  "Completed",
];
