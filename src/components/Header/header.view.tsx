import React from "react";
import { IProps } from "./header.types";
import { View, Text, TouchableOpacity } from "react-native";
import { useStyles } from "./header.styles";

export const HeaderView: React.FC<IProps> = (props) => {
  const { title, onPressButton, type } = props;
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {onPressButton &&
        <TouchableOpacity style={styles.button} onPress={onPressButton}>
          <Text style={styles.buttonText}>{type === "list" ? '+' : 'Editar'}</Text>
        </TouchableOpacity>
      }
    </View>
  );
};
