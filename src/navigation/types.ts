import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  WorkOrderForm: { id?: string };
};

export type FormNavProp = NativeStackNavigationProp<RootStackParamList, "WorkOrderForm">;


export type FormRouteProp = RouteProp<RootStackParamList, "WorkOrderForm">;