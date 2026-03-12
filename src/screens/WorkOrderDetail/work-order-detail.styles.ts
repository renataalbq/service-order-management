import { StyleSheet } from "react-native";
import { colors, spacing, radius, typography, shadow } from "../../theme";

export const useStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.surface,
    },

    wrapper: {
      flex: 1,
      backgroundColor: colors.background,
    },

    content: {
      padding: spacing.md,
      gap: spacing.md,
      paddingBottom: 48,
    },

    row: {
      backgroundColor: colors.surface,
      borderRadius: radius.lg,
      padding: spacing.sm,
      borderWidth: 1,
      borderColor: colors.border,
      borderLeftWidth: 3,
      borderLeftColor: colors.primaryMid,
      ...shadow.sm,
    },

    centered: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },

    notFound: {
      ...typography.body,
      color: colors.textSecondary,
    },

    editBtn: {
      ...typography.body,
      color: colors.primary,
      fontWeight: "600" as const,
    },

    card: {
      backgroundColor: colors.surface,
      borderRadius: radius.lg,
      padding: spacing.md,
      gap: spacing.sm,
      borderWidth: 1,
      borderColor: colors.border,
      ...shadow.sm,
    },

    cardHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },

    syncPill: {
      backgroundColor: colors.warningLight,
      borderRadius: radius.full,
      paddingHorizontal: 8,
      paddingVertical: 3,
    },

    syncPillText: {
      ...typography.caption,
      color: colors.warning,
    },

    title: {
      ...typography.h2,
      color: colors.text,
    },

    sectionLabel: {
      ...typography.label,
      color: colors.primary,
      letterSpacing: 0.8,
    },

    description: {
      ...typography.body,
      color: colors.textSecondary,
      lineHeight: 22,
    },

    divider: {
      height: 1,
      backgroundColor: colors.border,
      marginHorizontal: spacing.sm,
    },

    deleteBtn: {
      backgroundColor: colors.errorLight,
      borderRadius: radius.lg,
      padding: spacing.md,
      alignItems: "center",
      borderWidth: 1,
      borderColor: colors.accentMid,
    },

    deleteBtnText: {
      ...typography.body,
      color: colors.error,
      fontWeight: "600" as const,
    },
  });
};