import { SyncResult } from "../../service/types";

export type SyncStatus = "idle" | "syncing" | "success" | "error";

export type SyncSlice = {
  syncStatus: SyncStatus;
  syncErrors: string[];
  lastSyncedAt: Date | null;
  isOnline: boolean;

  sync: () => Promise<SyncResult>;
  setOnline: (online: boolean) => void;
};
