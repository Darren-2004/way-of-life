import { useState } from "react";
import { useNotifications } from "../pwa/useNotifications";

export default function NotificationBanner() {
  const {
    isSupported,
    permission,
    isSubscribed,
    enableNotifications,
    sendTestNotification,
  } = useNotifications();
  const [dismissed, setDismissed] = useState(false);
  const [justEnabled, setJustEnabled] = useState(false);

  // Don't show if not supported, already subscribed, denied, or dismissed
  if (!isSupported || permission === "denied" || dismissed) return null;

  // If already subscribed and user just enabled, show test button briefly
  if (isSubscribed && !justEnabled) return null;

  const handleEnable = async () => {
    await enableNotifications();
    setJustEnabled(true);
    // Auto-dismiss after 8 seconds
    setTimeout(() => setDismissed(true), 8000);
  };

  const handleTest = async () => {
    await sendTestNotification();
    setTimeout(() => setDismissed(true), 3000);
  };

  return (
    <div className="fixed top-20 left-4 right-4 md:left-auto md:right-8 md:max-w-sm z-[100] bg-[#12322f] text-white rounded-lg shadow-2xl p-5 flex flex-col gap-3 animate-slide-up">
      <p className="serif text-lg">🔔 Restez informée</p>

      {!isSubscribed && !justEnabled ? (
        <>
          <p className="text-sm text-white/80">
            Activez les notifications pour recevoir des rappels de cours et les
            actualités du studio.
          </p>
          <div className="flex gap-3 justify-end">
            <button
              onClick={() => setDismissed(true)}
              className="text-xs uppercase tracking-[0.14em] text-white/60 hover:text-white transition px-3 py-2"
            >
              Non merci
            </button>
            <button
              onClick={handleEnable}
              className="bg-[#30d5c8] text-[#12322f] px-5 py-2 text-xs uppercase tracking-[0.14em] rounded-sm hover:bg-white transition"
            >
              Activer
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="text-sm text-white/80">
            ✅ Notifications activées ! Testez maintenant :
          </p>
          <div className="flex gap-3 justify-end">
            <button
              onClick={() => setDismissed(true)}
              className="text-xs uppercase tracking-[0.14em] text-white/60 hover:text-white transition px-3 py-2"
            >
              Fermer
            </button>
            <button
              onClick={handleTest}
              className="bg-[#30d5c8] text-[#12322f] px-5 py-2 text-xs uppercase tracking-[0.14em] rounded-sm hover:bg-white transition"
            >
              Tester
            </button>
          </div>
        </>
      )}
    </div>
  );
}
