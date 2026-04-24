// ─── Way of Life — Service Worker ───
const CACHE_NAME = "wol-cache-v1";
const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/icon-512.png",
  "/assets/model.jpg",
];

// ─── INSTALL: pre-cache the app shell ───
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// ─── ACTIVATE: clean up old caches ───
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// ─── FETCH: network-first with cache fallback ───
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Skip non-GET and chrome-extension requests
  if (request.method !== "GET" || request.url.startsWith("chrome-extension")) {
    return;
  }

  // For navigation requests, try network first then cache
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const cloned = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, cloned));
          return response;
        })
        .catch(() => caches.match("/index.html"))
    );
    return;
  }

  // For other requests: stale-while-revalidate
  event.respondWith(
    caches.match(request).then((cached) => {
      const fetchPromise = fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.ok) {
            const cloned = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, cloned));
          }
          return networkResponse;
        })
        .catch(() => cached);

      return cached || fetchPromise;
    })
  );
});

// ─── PUSH NOTIFICATIONS ───
self.addEventListener("push", (event) => {
  let data = {
    title: "Way of Life Pilates",
    body: "Vous avez un nouveau message !",
    icon: "/icon-512.png",
    badge: "/icon-512.png",
    url: "/",
  };

  try {
    if (event.data) {
      const payload = event.data.json();
      data = { ...data, ...payload };
    }
  } catch (e) {
    if (event.data) {
      data.body = event.data.text();
    }
  }

  const options = {
    body: data.body,
    icon: data.icon || "/icon-512.png",
    badge: data.badge || "/icon-512.png",
    vibrate: [100, 50, 100],
    data: {
      url: data.url || "/",
    },
    actions: [
      { action: "open", title: "Ouvrir" },
      { action: "close", title: "Fermer" },
    ],
  };

  event.waitUntil(self.registration.showNotification(data.title, options));
});

// ─── NOTIFICATION CLICK ───
self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  if (event.action === "close") return;

  const targetUrl = event.notification.data?.url || "/";

  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
      // Focus existing window if available
      for (const client of clientList) {
        if (client.url.includes(targetUrl) && "focus" in client) {
          return client.focus();
        }
      }
      // Otherwise open a new one
      if (self.clients.openWindow) {
        return self.clients.openWindow(targetUrl);
      }
    })
  );
});

// ─── SCHEDULED NOTIFICATIONS (every 5 minutes) ───
const INTERVAL_MS = 5 * 60 * 1000; // 5 minutes
let schedulerTimer = null;

const SCHEDULED_MESSAGES = [
  { title: "🧘‍♀️ Way of Life", body: "Avez-vous fait votre Pilates aujourd'hui ? Réservez votre prochaine séance !", url: "/contact" },
  { title: "💪 Restez active !", body: "Votre corps vous remerciera. Consultez le planning des cours.", url: "/services" },
  { title: "🌿 Bien-être", body: "Prenez un moment pour vous. Une séance de Pilates vous attend.", url: "/services" },
  { title: "✨ Way of Life", body: "Nouveau cours disponible ! Découvrez notre planning mis à jour.", url: "/services" },
  { title: "🔔 Rappel Pilates", body: "N'oubliez pas de réserver votre créneau de la semaine !", url: "/contact" },
  { title: "🧘 Respirer, Bouger", body: "Le Pilates reformer pour la force et l'équilibre. On vous attend !", url: "/" },
  { title: "💫 Way of Life", body: "Votre progression commence par un premier pas. Réservez maintenant.", url: "/contact" },
  { title: "🌸 Pilates prénatal", body: "Des séances adaptées à chaque trimestre. Prenez soin de vous.", url: "/services" },
];

function startScheduler() {
  if (schedulerTimer) return; // already running

  schedulerTimer = setInterval(() => {
    const msg = SCHEDULED_MESSAGES[Math.floor(Math.random() * SCHEDULED_MESSAGES.length)];
    self.registration.showNotification(msg.title, {
      body: msg.body,
      icon: "/icon-512.png",
      badge: "/icon-512.png",
      vibrate: [100, 50, 100],
      tag: "scheduled-reminder", // replaces previous scheduled notification
      renotify: true,
      data: { url: msg.url },
      actions: [
        { action: "open", title: "Ouvrir" },
        { action: "close", title: "Fermer" },
      ],
    });
  }, INTERVAL_MS);
}

function stopScheduler() {
  if (schedulerTimer) {
    clearInterval(schedulerTimer);
    schedulerTimer = null;
  }
}

// Listen for start/stop messages from the app
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "START_SCHEDULER") {
    startScheduler();
  }
  if (event.data && event.data.type === "STOP_SCHEDULER") {
    stopScheduler();
  }
});
