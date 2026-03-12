import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { StatusBadge } from "../../components/StatusBadge/status-badge.controller";
import { useStyles } from "./work-order-detail.styles";
import { IProps } from "./work-order-detail.types";
import { DetailRow } from "../../components/DetailRow/detail-row.controller";
import { Header } from "../../components/Header/header.controller";
import { formatDate } from "../../utils/format-date";
import { SafeAreaView } from "react-native-safe-area-context";

export const WorkOrderDetailView: React.FC<IProps> = (props) => {
  const styles = useStyles();

  const {
    order,
    onDelete,
    navigation
  } = props;

  if (!order) {
    return (
      <View style={styles.centered}>
        <Text style={styles.notFound}>Ordem de serviço não encontrada.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Detalhes"
        type="detail"
        onPressButton={() => navigation.navigate("WorkOrderForm", { id: order.id })}        navigation={navigation}
      />
      <ScrollView style={styles.wrapper} contentContainerStyle={styles.content}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <StatusBadge status={order.status} />
          </View>

          <Text style={styles.title}>{order.title}</Text>

          <View style={styles.divider} />

          <Text style={styles.sectionLabel}>DESCRIÇÃO</Text>
          <Text style={styles.description}>{order.description}</Text>
        </View>

        <View style={styles.row}>
          <DetailRow
            iconName={'person'}
            label="Responsável"
            value={order.assignedTo}
          />

          <View style={styles.divider} />

          <DetailRow
            iconName={'calendar-month'}
            label="Criado em"
            value={formatDate(order.createdAt)}
          />

          <View style={styles.divider} />

          <DetailRow
            iconName={'sync'}
            label="Atualizado em"
            value={formatDate(order.updatedAt)}
          />

          <View style={styles.divider} />

        </View>

        <TouchableOpacity style={styles.deleteBtn} onPress={onDelete}>
          <Text style={styles.deleteBtnText}>Excluir ordem de serviço</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>

  );
};
