import React, { useEffect } from "react";
import { StatusBar, useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootNavigator } from "./src/navigation/RootNavigator";
import { colors } from "./src/theme";
import { useStore } from "./src/modules/work-orders";

function App(): React.JSX.Element {
  const isDark = useColorScheme() === "dark";
  const loadOrders = useStore((s) => s.loadOrders);
  const sync = useStore((s) => s.sync);

  useEffect(() => {
    loadOrders();
    sync().catch(() => {});
  }, []);
  
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={isDark ? "light-content" : "dark-content"}
        backgroundColor={colors.surface}
      />
      <RootNavigator />
    </SafeAreaProvider>
  );
}

export default App;