import { useEffect, useRef } from "react";
import NetInfo from "@react-native-community/netinfo";
import { useStore } from "../store";

export function useNetworkSync() {
  const sync = useStore((s) => s.sync);
  const setOnline = useStore((s) => s.setOnline);

  const wasOffline = useRef(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    NetInfo.fetch().then((state) => {
      const online =
        state.isConnected === true && state.isInternetReachable !== false;
      setOnline(online);
      wasOffline.current = !online;
    });

    const unsubscribe = NetInfo.addEventListener((state) => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }

      debounceRef.current = setTimeout(() => {
        const online =
          state.isConnected === true && state.isInternetReachable !== false;

        setOnline(online);

        if (online && wasOffline.current) {
          sync().catch(console.error);
        }

        wasOffline.current = !online;
      }, 300);
    });

    return () => {
      unsubscribe();
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [sync, setOnline]);
}