import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { businessConfig } from '../config/business';

export default function InstallHint() {
  const { theme } = businessConfig;
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      // Update UI notify the user they can install the PWA
      setIsVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
    
    // We've used the prompt, and can't use it again, throw it away
    setDeferredPrompt(null);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="bg-rose-100 border-b border-rose-200 relative z-50"
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📲</span>
            <p className={`text-sm font-medium ${theme.text}`}>
              Установите приложение для быстрого доступа
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleInstallClick}
              className="bg-rose-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-md hover:bg-rose-600 transition-colors"
            >
              Установить
            </button>
            <button 
              onClick={() => setIsVisible(false)}
              className="text-rose-400 hover:text-rose-600 p-1"
            >
              ✕
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
