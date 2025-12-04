import { motion } from 'framer-motion';
import { businessConfig } from '../config/business';

export default function Hero() {
  const { hero, theme } = businessConfig;

  return (
    <div className={`${theme.bg} py-20 px-4 text-center relative overflow-hidden`}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-64 h-64 bg-rose-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', damping: 10, stiffness: 100 }}
          className="text-7xl mb-6"
        >
          {hero.emoji}
        </motion.div>
        
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6 tracking-wide bg-gradient-to-r from-slate-800 via-rose-700 to-slate-800 bg-clip-text text-transparent"
        >
          {hero.title}
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-2xl text-slate-600 leading-relaxed tracking-wide mb-8"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a 
            href={hero.locationUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => navigator.vibrate && navigator.vibrate(5)}
            className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-rose-400 text-rose-500 rounded-full font-semibold hover:bg-rose-50 transition-colors duration-300"
          >
            <span>📍</span>
            Проложить маршрут
          </a>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent rounded-full"
        />
      </div>
    </div>
  );
}
