import React from "react";
import { WorkOrderCardView } from "./work-order-card.view";
import { IProps } from "./work-order-card.types";

export const WorkOrderCard: React.FC<IProps> = (props) => {
  const { item, onPress } = props
  return (
    <WorkOrderCardView
      {...props}
      item={item}
      onPress={onPress}
    />
  );
};