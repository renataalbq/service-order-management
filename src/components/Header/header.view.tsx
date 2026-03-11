import React from "react";
import { IProps } from "./header.types";
import { View, Text, TouchableOpacity } from "react-native";
import { useStyles } from "./header.styles";
import Icon from 'react-native-vector-icons/MaterialIcons';

export const HeaderView: React.FC<IProps> = (props) => {
  const { title, onPressButton, type, navigation } = props;
  const styles = useStyles();

  const canGoBack = navigation.canGoBack();

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        {canGoBack && (
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-back" size={24} color="#000" />          
          </TouchableOpacity>
        )}

        <Text style={styles.title}>{title}</Text>
      </View>

      {onPressButton && (
        <TouchableOpacity style={styles.button} onPress={onPressButton}>
          {/* <Icon
            name={type === 'list' ? 'add' : 'edit'}
            size={24}
            color="#000"
          /> */}
        </TouchableOpacity>
      )}
    </View>
  );
};
