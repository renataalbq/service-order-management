import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  WorkOrderList: undefined;
  WorkOrderDetail: { id: string };
  WorkOrderForm: { id?: string };
};

export type ListNavProp = NativeStackNavigationProp<RootStackParamList, "WorkOrderList">;
export type DetailNavProp = NativeStackNavigationProp<RootStackParamList, "WorkOrderDetail">;
export type FormNavProp = NativeStackNavigationProp<RootStackParamList, "WorkOrderForm">;

export type DetailRouteProp = RouteProp<RootStackParamList, "WorkOrderDetail">;
export type FormRouteProp = RouteProp<RootStackParamList, "WorkOrderForm">;