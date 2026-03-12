import { StyleSheet } from "react-native";
import { colors, spacing, radius, typography, shadow } from "../../theme";

export const useStyles = () => {
  return StyleSheet.create({
    card: {
      backgroundColor: colors.surface,
      borderRadius: radius.lg,
      padding: spacing.md,
      marginHorizontal: spacing.md,
      marginVertical: spacing.xs,
      gap: spacing.sm,
      borderWidth: 1,
      borderColor: colors.border,
      borderLeftWidth: 2,
      borderLeftColor: colors.primaryMid,
      ...shadow.sm,
    },

    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },

    pendingPill: {
      backgroundColor: colors.warningLight,
      borderRadius: radius.full,
      paddingHorizontal: 8,
      paddingVertical: 3,
    },

    pendingText: {
      ...typography.caption,
      color: colors.warning,
    },

    title: {
      ...typography.h4,
      color: colors.text,
    },

    description: {
      ...typography.small,
      color: colors.textSecondary,
      lineHeight: 19,
    },

    footer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingTop: spacing.sm,
      borderTopWidth: 1,
      borderTopColor: colors.border,
      marginTop: spacing.xs,
    },

    assignee: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.sm,
      flex: 1,
    },

    avatar: {
      width: 26,
      height: 26,
      borderRadius: 13,
      backgroundColor: colors.primaryLight,
      borderWidth: 1.5,
      borderColor: colors.primaryMid,
      alignItems: "center",
      justifyContent: "center",
    },

    avatarLetter: {
      ...typography.label,
      color: colors.primary,
    },

    assigneeName: {
      ...typography.small,
      color: colors.textSecondary,
      flex: 1,
    },

    time: {
      ...typography.caption,
      color: colors.textMuted,
    },
  });
};
