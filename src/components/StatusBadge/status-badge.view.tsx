import React from "react";
import { View, Text } from "react-native";
import { useStyles } from "./status-badge.styles";
import { IProps } from "./status-badge.types";

export const StatusBadgeView: React.FC<IProps> = (props) => {
  const {config, size = "md"} = props;

  const styles = useStyles();

  return (
    <View style={[styles.badge, { backgroundColor: config.bg }, size === "sm" && styles.sm]}>
      <View style={[styles.dot, { backgroundColor: config.color }]} />
      <Text style={[styles.label, { color: config.color }]}>{config.label}</Text>
    </View>
  );
};