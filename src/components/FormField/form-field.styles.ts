import { StyleSheet } from "react-native";
import { colors, spacing, radius, typography } from "../../theme";

export const useStyles = () => {
  return StyleSheet.create({
    container: {
      gap: spacing.xs,
    },

    label: {
      ...typography.label,
      color: colors.primary,
      letterSpacing: 0.8,
    },

    input: {
      borderWidth: 1.5,
      borderColor: colors.border,
      borderRadius: radius.md,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm + 2,
      ...typography.body,
      color: colors.text,
      backgroundColor: colors.surface,
    },

    inputError: {
      borderColor: colors.accentMid,
    },

    error: {
      ...typography.caption,
      color: colors.error,
    },
  });
};