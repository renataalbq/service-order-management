import React from "react";
import { Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { DetailNavProp, DetailRouteProp } from "../../navigation/types";
import { WorkOrderDetailView } from "./work-order-detail.view";
import { useStore } from "../../store";

export const WorkOrderDetail: React.FC = () => {
  const navigation = useNavigation<DetailNavProp>();
  const route = useRoute<DetailRouteProp>();

  const { id } = route.params;

  const orders = useStore((s) => s.orders);
  const deleteOrder = useStore((s) => s.deleteOrder);

  const order = orders.find((o) => o.id === id);
  
  const handleDelete = () => {
    Alert.alert(
      "Excluir ordem",
      "Deseja excluir esta ordem de serviço?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: () => {
            deleteOrder(id);
            navigation.goBack();
          },
        },
      ]
    );
  };

  return (
    <WorkOrderDetailView
      navigation={navigation}
      order={order}
      onDelete={handleDelete}
    />
  );
};