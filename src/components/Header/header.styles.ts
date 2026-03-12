import { StyleSheet } from "react-native";
import { colors, typography } from "../../theme";

export const useStyles = () => {
  return StyleSheet.create({
    container: {
      height: 60,
      paddingHorizontal: 16,
      backgroundColor: colors.surface,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },

    title: {
      ...typography.h3,
      color: colors.primary,
    },

    left: {
      flexDirection: "row",
      alignItems: "center",
      flex: 1,
    },

    backButton: {
      marginRight: 6,
      padding: 4,
    },

    backIcon: {
      fontSize: 32,
      lineHeight: 36,
      color: colors.primary,
      fontWeight: "300" as const,
    },

    button: {
      width: 34,
      height: 34,
      borderRadius: 17,
      backgroundColor: colors.accentLight,
      borderWidth: 1.5,
      borderColor: colors.accentMid,
      alignItems: "center",
      justifyContent: "center",
    },

    buttonIcon: {
      fontSize: 18,
      lineHeight: 22,
      color: colors.accent,
      fontWeight: "500" as const,
    },

    buttonText: { 
      fontSize: 18, 
      color: colors.accent 
    },
    backText: { 
      fontSize: 20, 
      color: colors.primary 
    },
  });
};