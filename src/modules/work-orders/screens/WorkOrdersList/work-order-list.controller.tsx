import React, { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { WorkOrderListView } from "./work-order-list.view";
import { useNetworkSync } from "../../hooks";
import { WorkOrderStatus } from "../../types";
import { ListNavProp } from "../../../../navigation/types";
import { useStore } from "../../store";
import { FILTERS } from "./constants";

export const WorkOrderList: React.FC = () => {
  const navigation = useNavigation<ListNavProp>();

  const [filter, setFilter] = useState<WorkOrderStatus | "All">("All");
  const [refreshing, setRefreshing] = useState(false);

  const orders = useStore((s) => s.orders);
  const loadOrders = useStore((s) => s.loadOrders);
  const sync = useStore((s) => s.sync);
  const isLoading = useStore((s) => s.isLoading);
  const syncStatus = useStore((s) => s.syncStatus);
  const lastSyncedAt = useStore((s) => s.lastSyncedAt);
  const isOnline = useStore((s) => s.isOnline);

  useNetworkSync();

  useEffect(() => {
    loadOrders();
  }, [loadOrders]);

  const handleRefresh = useCallback(async () => {
    setRefreshing(true);

    if (isOnline) {
      const result = await sync();

      if (result.errors.length) {
        Alert.alert("Problemas na sincronização", result.errors.join("\n"));
      }
    } else {
      loadOrders();
    }

    setRefreshing(false);
  }, [isOnline, sync, loadOrders]);

  const handleManualSync = useCallback(async () => {
    if (!isOnline) {
      Alert.alert(
        "Sem conexão",
        "As alterações serão sincronizadas automaticamente quando você voltar a ficar online."
      );
      return;
    }

    const result = await sync();

    if (result.success) {
      Alert.alert(
        "Sincronização concluída",
        `${result.pushed} enviados - ${result.pulled} recebidos`
      );
    } else {
      Alert.alert("Problemas na sincronização", result.errors.join("\n"));
    }
  }, [isOnline, sync]);

  const filtered =
    filter === "All"
      ? orders
      : orders.filter((o) => o.status === filter);

  const pendingCount = orders.filter((o: any) => o.needsSync).length;

  return (
    <WorkOrderListView
      navigation={navigation}
      orders={orders}
      filtered={filtered}
      filter={filter}
      filters={FILTERS}
      pendingCount={pendingCount}
      isOnline={isOnline}
      isLoading={isLoading}
      refreshing={refreshing}
      syncStatus={syncStatus}
      lastSyncedAt={lastSyncedAt}
      onFilterChange={setFilter}
      onRefresh={handleRefresh}
      onManualSync={handleManualSync}
    />
  );
};