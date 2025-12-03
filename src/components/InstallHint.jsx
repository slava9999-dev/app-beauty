import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { businessConfig } from '../config/business';

export default function InstallHint() {
  const { theme } = businessConfig;
  const [isVisible, setIsVisible] = useState(true);

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
              Добавьте приложение на экран для быстрой записи
            </p>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-rose-400 hover:text-rose-600 p-1"
          >
            ✕
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
