import React from "react";
import { IProps } from "./detail-row.types";
import { View, Text } from "react-native";
import { useStyles } from "./detail-row.styles";
import Icon from 'react-native-vector-icons/MaterialIcons';

export const DetailRowView: React.FC<IProps> = (props) => {
  const { iconName, value, label } = props;
  const styles = useStyles();

  return (
    <View style={styles.row}>
      <Icon name='' size={24} color="#000" />
      <Text style={styles.icon}>{iconName}</Text>

      <View style={styles.content}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};
