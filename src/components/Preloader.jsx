import { motion } from 'framer-motion';
import { businessConfig } from '../config/business';

export default function Preloader() {
  const { theme } = businessConfig;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`fixed inset-0 z-50 flex items-center justify-center ${theme.bg}`}
    >
      <div className="relative flex flex-col items-center">
        {/* Pulsing Circle Background */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-32 h-32 bg-rose-200 rounded-full blur-xl"
        />

        {/* Emoji Icon Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl mb-4 relative z-10"
        >
          🌸
        </motion.div>

        {/* Text Reveal Animation */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className={`text-3xl font-bold ${theme.text} tracking-widest font-serif`}
          >
            VELVET
          </motion.h1>
        </div>
        
        <div className="overflow-hidden mt-1">
          <motion.p
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-xs tracking-[0.3em] text-slate-500 uppercase"
          >
            Beauty Lounge
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
