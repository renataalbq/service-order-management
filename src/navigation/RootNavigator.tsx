import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import { colors } from "../theme";
import { WorkOrderForm } from "../modules/work-orders/screens/WorkOrderForm/work-order-form.controller";
import { WorkOrderDetail } from "../modules/work-orders/screens/WorkOrderDetail/work-order-detail.controller";
import { WorkOrderList } from "../modules/work-orders/screens/WorkOrdersList/work-order-list.controller";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.surface },
        headerTintColor: colors.primary,
        headerTitleStyle: { color: colors.text, fontWeight: "600" },
        contentStyle: { backgroundColor: colors.background },
      }}>
      <Stack.Screen
        name="WorkOrderList"
        component={WorkOrderList}
        options={{ title: "Ordens de Serviço" }}
      />
      <Stack.Screen
        name="WorkOrderDetail"
        component={WorkOrderDetail}
        options={{ title: "Detalhes" }}
      />
      <Stack.Screen
        name="WorkOrderForm"
        component={WorkOrderForm}
        options={({ route }) => ({
          title: route.params?.id ? "Editar ordem" : "Nova ordem",
        })}
      />
    </Stack.Navigator>
  </NavigationContainer>
);