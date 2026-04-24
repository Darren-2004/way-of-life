import { useState, useEffect, useCallback } from "react";
import {
  isPushSupported,
  getNotificationPermission,
  requestNotificationPermission,
  subscribeToPush,
  sendLocalNotification,
} from "./registerSW";

interface UseNotificationsReturn {
  /** Whether push is supported in this browser */
  isSupported: boolean;
  /** Current permission state */
  permission: NotificationPermission;
  /** Whether a push subscription exists */
  isSubscribed: boolean;
  /** Request permission + subscribe */
  enableNotifications: () => Promise<void>;
  /** Fire a local test notification */
  sendTestNotification: () => Promise<void>;
}

export function useNotifications(): UseNotificationsReturn {
  const [isSupported] = useState(() => isPushSupported());
  const [permission, setPermission] = useState<NotificationPermission>(() =>
    getNotificationPermission()
  );
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Check subscription status on mount
  useEffect(() => {
    if (!isSupported) return;
    navigator.serviceWorker.ready.then(async (reg) => {
      const sub = await reg.pushManager.getSubscription();
      setIsSubscribed(!!sub);
    });
  }, [isSupported]);

  const enableNotifications = useCallback(async () => {
    if (!isSupported) return;

    const perm = await requestNotificationPermission();
    setPermission(perm);

    if (perm === "granted") {
      const registration = await navigator.serviceWorker.ready;
      const subscription = await subscribeToPush(registration);
      setIsSubscribed(!!subscription);
    }
  }, [isSupported]);

  const sendTestNotification = useCallback(async () => {
    await sendLocalNotification("Way of Life 🧘‍♀️", {
      body: "Votre prochaine séance de Pilates est dans 1 heure ! N'oubliez pas votre tenue.",
      data: { url: "/services" },
    });
  }, []);

  return {
    isSupported,
    permission,
    isSubscribed,
    enableNotifications,
    sendTestNotification,
  };
}
