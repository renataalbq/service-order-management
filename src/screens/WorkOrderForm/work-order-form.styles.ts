import { StyleSheet } from "react-native";
import { colors, spacing, radius, typography } from "../../theme";

export const useStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.surface,
    },

    content: {
      padding: spacing.md,
      gap: spacing.md,
      paddingBottom: 48,
    },

    textarea: {
      minHeight: 100,
      paddingTop: spacing.sm,
    },

    saveBtn: {
      backgroundColor: colors.primary,
      borderRadius: radius.md,
      paddingVertical: spacing.md,
      alignItems: "center",
      marginTop: spacing.sm,
    },

    saveBtnDisabled: {
      opacity: 0.55,
    },

    saveBtnText: {
      ...typography.body,
      color: colors.textInverse,
      fontWeight: "700" as const,
    },
  });
};