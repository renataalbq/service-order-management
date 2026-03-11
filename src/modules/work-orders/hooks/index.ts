import { useEffect, useRef } from "react";
import NetInfo from "@react-native-community/netinfo";
import { useStore } from "../store";

export function useNetworkSync() {
  const sync = useStore((s) => s.sync);
  const setOnline = useStore((s) => s.setOnline);

  const wasOffline = useRef(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      const online =
        state.isConnected === true && state.isInternetReachable !== false;

      setOnline(online);

      if (online && wasOffline.current) {
        sync().catch(console.error);
      }

      wasOffline.current = !online;
    });

    return () => unsubscribe();
  }, [sync, setOnline]);
}