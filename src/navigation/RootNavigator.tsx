import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import { WorkOrderForm } from "../screens/WorkOrderForm";
import { WorkOrderDetail } from "../screens/WorkOrderDetail";
import { WorkOrderList } from "../screens/WorkOrdersList";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="WorkOrderList"
        component={WorkOrderList}
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
