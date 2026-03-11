import { StyleSheet } from "react-native";
import { radius, typography } from "../../theme";

export const useStyles = () => {
  return StyleSheet.create({
    badge: {
      flexDirection: "row",
      alignItems: "center",
      gap: 5,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: radius.full,
      alignSelf: "flex-start",
    },

    sm: { 
      paddingHorizontal: 8, 
      paddingVertical: 3 
    },

    dot: { 
      width: 6, 
      height: 6, 
      borderRadius: 3 
    },

    label: { 
      ...typography.label, 
      textTransform: "uppercase" as const 
    },
  });
};