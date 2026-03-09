import { StyleSheet } from "react-native";
import { colors, spacing, radius, typography } from "../../theme";

export const useStyles = () => {
  return StyleSheet.create({
    container: { 
      gap: spacing.xs 
    },

    label: { 
      ...typography.label, 
      color: colors.textSecondary, 
      letterSpacing: 0.8 
    },

    row: { 
      flexDirection: "row", 
      gap: spacing.sm 
    },

    option: {
      flex: 1,
      paddingVertical: spacing.sm,
      borderRadius: radius.md,
      borderWidth: 1.5,
      borderColor: colors.border,
      backgroundColor: colors.surface,
      alignItems: "center",
    },

    optionText: { 
      ...typography.small, 
      color: colors.textSecondary, 
      textAlign: "center" as const 
    },
  });
};
