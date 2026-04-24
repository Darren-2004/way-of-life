// ─── Service Worker Registration ───

export async function registerSW(): Promise<ServiceWorkerRegistration | undefined> {
  if (!("serviceWorker" in navigator)) {
    console.warn("Service Workers not supported in this browser.");
    return undefined;
  }

  try {
    const registration = await navigator.serviceWorker.register("/sw.js", {
      scope: "/",
    });

    registration.addEventListener("updatefound", () => {
      const newWorker = registration.installing;
      if (newWorker) {
        newWorker.addEventListener("statechange", () => {
          if (newWorker.state === "activated") {
            console.log("[SW] New service worker activated — content updated.");
          }
        });
      }
    });

    console.log("[SW] Service Worker registered with scope:", registration.scope);
    return registration;
  } catch (error) {
    console.error("[SW] Service Worker registration failed:", error);
    return undefined;
  }
}

// ─── Push Notification Helpers ───

export function isPushSupported(): boolean {
  return "PushManager" in window && "Notification" in window;
}

export function getNotificationPermission(): NotificationPermission {
  if (!("Notification" in window)) return "denied";
  return Notification.permission;
}

export async function requestNotificationPermission(): Promise<NotificationPermission> {
  if (!("Notification" in window)) return "denied";
  const permission = await Notification.requestPermission();
  return permission;
}

export async function subscribeToPush(
  registration: ServiceWorkerRegistration
): Promise<PushSubscription | null> {
  try {
    // Check for existing subscription
    let subscription = await registration.pushManager.getSubscription();
    if (subscription) return subscription;

    // Generate a VAPID-safe applicationServerKey placeholder
    // In production, replace this with your own VAPID public key
    const vapidPublicKey =
      "BEl62iUYgUivxIkv69yViEuiBIa-Ib9-SkvMeAtA3LFgDzkOs-qy1dSz1BupxFg8NQ6WG0nayW5jiMkVkz4JRkM";

    const convertedKey = urlBase64ToUint8Array(vapidPublicKey);

    subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: convertedKey as BufferSource,
    });

    console.log("[Push] Subscribed:", JSON.stringify(subscription));
    return subscription;
  } catch (error) {
    console.error("[Push] Subscription failed:", error);
    return null;
  }
}

/**
 * Send a local notification (useful for testing without a push server)
 */
export async function sendLocalNotification(
  title: string,
  options?: NotificationOptions
): Promise<void> {
  if (Notification.permission !== "granted") {
    const perm = await requestNotificationPermission();
    if (perm !== "granted") return;
  }

  const registration = await navigator.serviceWorker.ready;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (registration.showNotification as any)(title, {
    icon: "/icon-512.png",
    badge: "/icon-512.png",
    vibrate: [100, 50, 100],
    ...options,
  });
}

// ─── Utility ───

function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
