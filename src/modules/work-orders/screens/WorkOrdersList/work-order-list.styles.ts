import { StyleSheet } from "react-native";
import { colors, radius, spacing, typography } from "../../../../theme";

export const useStyles = () => {
  return StyleSheet.create({
    container: { 
      flex: 1, 
      backgroundColor: colors.background 
    },

    statusBar: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      backgroundColor: colors.surface,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },

    statusLeft: { 
      flexDirection: "row", 
      alignItems: "center", 
      gap: spacing.sm 
    },

    dot: { 
      width: 8, 
      height: 8, 
      borderRadius: 4 
    },

    statusText: { 
      ...typography.small, 
      color: colors.textSecondary 
    },

    pendingBadge: {
      backgroundColor: colors.warningLight,
      borderRadius: radius.full,
      paddingHorizontal: 8,
      paddingVertical: 2,
    },
    
    pendingBadgeText: { 
      ...typography.caption, 
      color: colors.warning 
    },

    syncBtn: {
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
      paddingHorizontal: 12,
      paddingVertical: 6,
      backgroundColor: colors.primaryLight,
      borderRadius: radius.full,
    },

    syncBtnText: { 
      ...typography.label, 
      color: colors.primary 
    },

    lastSync: {
      ...typography.caption,
      color: colors.textMuted,
      textAlign: "center",
      paddingVertical: spacing.xs,
      backgroundColor: colors.surface,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },

    filters: {
      flexDirection: "row",
      padding: spacing.sm,
      gap: spacing.sm,
      backgroundColor: colors.surface,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },

    filterTab: {
      flex: 1,
      paddingVertical: 6,
      borderRadius: radius.full,
      borderWidth: 1,
      borderColor: colors.border,
      alignItems: "center",
    },

    filterTabActive: { 
      backgroundColor: colors.primary, 
      borderColor: colors.primary 
    },

    filterTabText: { 
      ...typography.caption, 
      color: colors.textSecondary 
    },

    filterTabTextActive: { 
      color: colors.textInverse, 
      fontWeight: "600" as const 
    },

    loader: { 
      flex: 1 
    },

    listContent: { 
      paddingVertical: spacing.sm 
    },

    emptyContainer: { flex: 1 },

    empty: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: spacing.xl,
    },

    emptyIcon: { 
      fontSize: 44, 
      marginBottom: spacing.sm 
    },

    emptyTitle: { 
      ...typography.h3, 
      color: colors.text, 
      textAlign: "center" 
    },

    emptySubtitle: {
      ...typography.body,
      color: colors.textSecondary,
      textAlign: "center",
      marginTop: spacing.xs,
    },

    addBtn: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: colors.primary,
      alignItems: "center",
      justifyContent: "center",
    },

    addBtnText: { 
      color: colors.textInverse, 
      fontSize: 22, 
      lineHeight: 26 
    },
  });
};