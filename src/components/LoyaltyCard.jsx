import { motion } from 'framer-motion';
import { businessConfig } from '../config/business';

export default function LoyaltyCard() {
  const { loyalty, theme, telegramAdmin } = businessConfig;

  const handleOfferClick = () => {
    // Haptic feedback
    if (navigator.vibrate) {
      navigator.vibrate(10);
    }
    
    // Открываем Telegram для получения бонуса
    const message = `🌸 Хочу получить бонус: ${loyalty.discount} - ${loyalty.description}`;
    const telegramUrl = `https://t.me/${telegramAdmin}?text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, '_blank');
  };

  return (
    <div className={`${theme.bg} py-12 px-4`}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-2xl shadow-slate-900/30 p-8 border border-slate-700/50 backdrop-blur-xl"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-amber-400 text-sm font-semibold tracking-widest mb-2">
                PREMIUM MEMBERSHIP
              </div>
              <h2 className="text-3xl font-bold text-amber-100 tracking-wide">
                {loyalty.title}
              </h2>
            </div>
            <motion.span 
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="text-5xl"
            >
              💎
            </motion.span>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleOfferClick}
            className="w-full bg-gradient-to-r from-amber-500/20 to-rose-500/20 backdrop-blur-sm rounded-2xl p-6 mb-4 border border-amber-400/30 cursor-pointer hover:bg-white/5 transition-colors text-left group"
          >
            <div className="text-center">
              <div className="text-sm font-semibold text-amber-300 mb-2 tracking-wide group-hover:text-amber-200 transition-colors">
                СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ (Нажмите, чтобы получить)
              </div>
              <div className="text-3xl font-bold text-amber-100 tracking-wider group-hover:text-white transition-colors">
                {loyalty.discount}
              </div>
            </div>
          </motion.button>

          <p className="text-slate-300 text-center leading-relaxed">
            {loyalty.description}
          </p>

          {/* Decorative elements */}
          <div className="mt-6 flex justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
            <div className="w-2 h-2 rounded-full bg-amber-400/60"></div>
            <div className="w-2 h-2 rounded-full bg-amber-400/30"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
