import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useStyles } from "./status-picker.styles";
import { IProps } from "./status-picker.types";
import { ACTIVE, LABELS, STATUS } from "./constants";

export const StatusPickerView: React.FC<IProps> = (props) => {
  const { value, onChange } = props;
  
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Status</Text>
      <View style={styles.row}>
        {STATUS.map((status) => {
          const active = value === status;
          const config = ACTIVE[status];

          return (
            <TouchableOpacity
              key={status}
              style={[
                styles.option,
                active && { backgroundColor: config.bg, borderColor: config.color },
              ]}
              onPress={() => onChange(status)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.optionText,
                  active && { color: config.color, fontWeight: "600" },
                ]}
              >
                {LABELS[status]}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};