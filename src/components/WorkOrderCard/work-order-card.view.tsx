import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useStyles } from "./work-order-card.styles";
import { StatusBadge } from "../StatusBadge/status-badge.controller";
import { IProps } from "./work-order-card.types";
import { timeAgo } from "../../utils/time-ago";

export const WorkOrderCardView: React.FC<IProps> = (props) => {
    const { item, onPress } = props

  const styles = useStyles();

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.75}>
      <View style={styles.header}>
        <StatusBadge status={item.status} size="sm" />
        {item.needsSync && (
          <View style={styles.pendingPill}>
            <Text style={styles.pendingText}>Pendentes de sync</Text>
          </View>
        )}
      </View>

      <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
      <Text style={styles.description} numberOfLines={2}>{item.description}</Text>

      <View style={styles.footer}>
        <View style={styles.assignee}>
          <View style={styles.avatar}>
            <Text style={styles.avatarLetter}>
              {item.assignedTo.charAt(0).toUpperCase()}
            </Text>
          </View>
          <Text style={styles.assigneeName} numberOfLines={1}>{item.assignedTo}</Text>
        </View>
        <Text style={styles.time}>{timeAgo(item.updatedAt)}</Text>
      </View>
    </TouchableOpacity>
  );
};