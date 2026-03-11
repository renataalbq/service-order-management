import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "../../theme";

export const useStyles = () => {
  return StyleSheet.create({
    row: {
      flexDirection: "row",
      alignItems: "center",
      padding: spacing.sm,
      gap: spacing.md,
    },

    icon: {
      fontSize: 18,
      width: 26,
      textAlign: "center"
    },

    content: {
      flex: 1
    },

    label: {
      ...typography.caption,
      color: colors.textMuted,
      textTransform: "uppercase" as const,
    },

    value: {
      ...typography.body,
      color: colors.text,
      marginTop: 1
    },
  });
}
