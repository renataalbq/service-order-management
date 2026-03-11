import React, { useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { colors } from "../../theme";
import { useStyles } from "./work-order-list.styles";
import { IProps, IFilter } from "./work-order-list.types";
import { WorkOrderCard } from "../../components/WorkOrderCard/work-order-card.controller";
import { formatTime } from "../../utils/format-time";
import { FILTER_LABELS } from "./constants";
import { Header } from "../../components/Header/header.controller";
import { SafeAreaView } from "react-native-safe-area-context";
import { WorkOrder } from "../../types";

export const WorkOrderListView: React.FC<IProps> = (props) => {
  const {
    navigation,
    filtered,
    filter,
    filters,
    pendingCount,
    isOnline,
    isLoading,
    refreshing,
    syncStatus,
    lastSyncedAt,
    onFilterChange,
    onRefresh,
    onManualSync,
  } = props;

  const styles = useStyles();

  const renderItem = useCallback(
    ({ item }: { item: WorkOrder }) => (
      <WorkOrderCard
        item={item}
        onPress={() =>
          navigation.navigate("WorkOrderDetail", { id: item.id })
        }
      />
    ),
    [navigation]
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Ordens de Serviço"
        type="list"
        onPressButton={() => navigation.navigate("WorkOrderForm", {})}
        navigation={navigation}
      />
      <View style={styles.statusBar}>
        <View style={styles.statusLeft}>
          <View
            style={[
              styles.dot,
              { backgroundColor: isOnline ? colors.success : colors.error },
            ]}
          />

          <Text style={styles.statusText}>
            {isOnline ? "Online" : "Offline"}
          </Text>

          {pendingCount > 0 && (
            <View style={styles.pendingBadge}>
              <Text style={styles.pendingBadgeText}>
                {pendingCount} pendentes
              </Text>
            </View>
          )}
        </View>

        <TouchableOpacity style={styles.syncBtn} onPress={onManualSync}>
          {syncStatus === "syncing" ? (
            <ActivityIndicator size={12} color={colors.primary} />
          ) : (
            <Text style={styles.syncBtnText}>↻ Sincronizar</Text>
          )}
        </TouchableOpacity>
      </View>

      {lastSyncedAt && (
        <Text style={styles.lastSync}>
          Última sincronização {formatTime(lastSyncedAt)}
        </Text>
      )}

      <View style={styles.filters}>
        {filters.map((f) => (
          <TouchableOpacity
            key={f}
            style={[styles.filterTab, filter === f && styles.filterTabActive]}
            onPress={() => onFilterChange(f)}
          >
            <Text
              style={[
                styles.filterTabText,
                filter === f && styles.filterTabTextActive,
              ]}
            >
              {FILTER_LABELS[f as IFilter]}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {isLoading && !refreshing ? (
        <ActivityIndicator style={styles.loader} color={colors.primary} />
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={
            filtered.length === 0
              ? styles.emptyContainer
              : styles.listContent
          }
          ListEmptyComponent={
            <View style={styles.empty}>
              <Text style={styles.emptyIcon}>📋</Text>

              <Text style={styles.emptyTitle}>
                {filter === "All"
                  ? "Nenhuma ordem de serviço"
                  : `Nenhuma ordem ${FILTER_LABELS[filter as IFilter].toLowerCase()}`}
              </Text>

              <Text style={styles.emptySubtitle}>
                {filter === "All"
                  ? "Toque em + para criar uma"
                  : "Tente outro filtro"}
              </Text>
            </View>
          }
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor={colors.primary}
            />
          }
        />
      )}
    </SafeAreaView>
  );
};