import { motion } from 'framer-motion';
import { businessConfig } from '../config/business';

export default function ServiceCard({ service, onBook }) {
  const { theme, currency } = businessConfig;

  const handleClick = () => {
    // Haptic feedback
    if (navigator.vibrate) {
      navigator.vibrate(10);
    }
    onBook(service);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`${theme.cardBg} rounded-2xl shadow-lg shadow-rose-200/50 overflow-hidden border ${theme.border} cursor-pointer`}
    >
      <div className="h-56 overflow-hidden relative">
        <motion.img 
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover"
        />
        {service.isPopular && (
          <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
            <span>🔥</span> ХИТ
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className={`text-xl font-bold mb-3 ${theme.text} tracking-wide`}>
          {service.title}
        </h3>
        <p className="text-slate-600 mb-6 text-sm leading-relaxed">
          {service.description}
        </p>
        <div className="flex items-center justify-between">
          <span className={`text-2xl font-bold ${theme.text}`}>
            {service.price} {currency}
          </span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleClick}
            className="bg-gradient-to-r from-rose-400 to-rose-500 text-white px-6 py-2.5 rounded-full font-semibold shadow-md shadow-rose-300/50 hover:shadow-lg hover:shadow-rose-300/60 transition-all duration-300"
          >
            Записаться
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
