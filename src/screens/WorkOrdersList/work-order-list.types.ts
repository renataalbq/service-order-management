import { ListNavProp } from "../../navigation/types";
import { WorkOrder, WorkOrderStatus } from "../../types";

export type IFilter = WorkOrderStatus | "All";

export type IProps = {
  navigation: ListNavProp;
  orders: WorkOrder[];
  filtered: WorkOrder[];
  filter: IFilter;
  filters: (IFilter)[];
  pendingCount: number;
  isOnline: boolean;
  isLoading: boolean;
  refreshing: boolean;
  syncStatus: string;
  lastSyncedAt: Date | null;
  onFilterChange: (filter: IFilter) => void;
  onRefresh: () => void;
  onManualSync: () => void;
};
