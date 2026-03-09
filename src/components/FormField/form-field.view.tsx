import React from "react";
import { View, Text, TextInput } from "react-native";
import { useStyles } from "./form-field.styles";
import { IProps } from "./form-field.types";

export const FormFieldView: React.FC<IProps> = (props) => {
  const { label, error, style, ...rest} = props

  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label.toUpperCase()}</Text>
      <TextInput
        style={[styles.input, error ? styles.inputError : null, style]}
        placeholderTextColor="#94A3B8"
        {...rest}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};