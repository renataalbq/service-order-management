import { StyleSheet } from "react-native";
import { colors } from "../../theme";

export const useStyles = () => {
  return StyleSheet.create({
    container: {
      height: 60,
      paddingHorizontal: 16,
      backgroundColor: "#fff",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    title: {
      fontSize: 18,
      fontWeight: "600",
    },
    button: {
      padding: 8,
    },
    buttonText: {
      fontSize: 18,
    },
    left: {
      flexDirection: "row",
      alignItems: "center",
    },

    backButton: {
      marginRight: 8,
    },

    backText: {
      fontSize: 20,
      color: colors.primary,
    },
  });
}
