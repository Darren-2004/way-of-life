import { useState, useEffect } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Detect if app is already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
      return;
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsVisible(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    window.addEventListener("appinstalled", () => {
      setIsInstalled(true);
      setIsVisible(false);
      setDeferredPrompt(null);
    });

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setIsInstalled(true);
    }
    setDeferredPrompt(null);
    setIsVisible(false);
  };

  if (isInstalled || !isVisible) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 md:left-auto md:right-8 md:max-w-sm z-[100] bg-white rounded-lg shadow-2xl border border-[#e4d7ce] p-5 flex flex-col gap-3 animate-slide-up">
      <p className="serif text-xl text-[#2e231d]">Installez Way of Life</p>
      <p className="text-sm text-[#6c6059]">
        Ajoutez l'application à votre écran d'accueil pour un accès rapide à vos
        cours de Pilates.
      </p>
      <div className="flex gap-3 justify-end">
        <button
          onClick={() => setIsVisible(false)}
          className="text-xs uppercase tracking-[0.14em] text-[#6c6059] hover:text-[#2e231d] transition px-3 py-2"
        >
          Plus tard
        </button>
        <button
          onClick={handleInstall}
          className="bg-[#30d5c8] text-[#12322f] px-5 py-2 text-xs uppercase tracking-[0.14em] rounded-sm hover:bg-[#12322f] hover:text-[#30d5c8] transition"
        >
          Installer
        </button>
      </div>
    </div>
  );
}
