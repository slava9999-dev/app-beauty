import { motion } from 'framer-motion';
import { businessConfig } from '../config/business';

export default function LoyaltyCard() {
  const { loyalty, theme, telegramAdmin } = businessConfig;

  const handleOfferClick = () => {
    if (navigator.vibrate) navigator.vibrate(10);
    const message = `🌸 Хочу получить бонус: ${loyalty.discount}`;
    window.open(`https://t.me/${telegramAdmin}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const slides = [
    {
      id: 1,
      type: 'main',
      title: loyalty.title,
      subtitle: "PREMIUM MEMBERSHIP",
      content: (
        <div className="text-center mt-4">
          <div className="text-sm font-semibold text-amber-300 mb-2 tracking-wide">
            ВАШ СТАТУС
          </div>
          <div className="text-3xl font-bold text-amber-100 tracking-wider">
            GOLD
          </div>
          <p className="text-slate-300 text-sm mt-4 leading-relaxed">
            {loyalty.description}
          </p>
        </div>
      )
    },
    {
      id: 2,
      type: 'info',
      title: "Кэшбэк 10%",
      subtitle: "НАКОПИТЕЛЬНАЯ СИСТЕМА",
      content: (
        <div className="text-center mt-4">
          <div className="text-5xl mb-4">💰</div>
          <p className="text-slate-300 text-sm leading-relaxed">
            Возвращаем 10% от стоимости каждой услуги баллами. Оплачивайте ими до 50% чека.
          </p>
        </div>
      )
    },
    {
      id: 3,
      type: 'gift',
      title: "Подарок",
      subtitle: "В ДЕНЬ РОЖДЕНИЯ",
      content: (
        <div className="text-center mt-4">
          <div className="text-5xl mb-4">🎁</div>
          <p className="text-slate-300 text-sm leading-relaxed">
            Бесплатная укладка или SPA-уход за 3 дня до и после вашего дня рождения.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className={`${theme.bg} py-16 px-4 overflow-hidden`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-rose-500 text-sm font-semibold tracking-widest uppercase mb-2 block">
            Программа лояльности
          </span>
          <h2 className={`text-3xl font-bold ${theme.text} font-serif`}>
            Beauty Club
          </h2>
          <p className="text-slate-400 text-xs mt-2">Свайпайте влево ←</p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto gap-4 px-4 pb-8 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
          {slides.map((slide) => (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-80 snap-center"
            >
              <div 
                onClick={slide.type === 'main' ? handleOfferClick : undefined}
                className={`h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-xl p-8 border border-slate-700/50 backdrop-blur-xl relative overflow-hidden group ${slide.type === 'main' ? 'cursor-pointer' : ''}`}
              >
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -ml-16 -mb-16"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-amber-400/80 text-[10px] font-bold tracking-[0.2em] uppercase mb-1">
                        {slide.subtitle}
                      </div>
                      <h3 className="text-2xl font-bold text-amber-100 font-serif">
                        {slide.title}
                      </h3>
                    </div>
                    {slide.type === 'main' && <span className="text-3xl">💎</span>}
                  </div>
                  
                  {slide.content}

                  {slide.type === 'main' && (
                    <div className="mt-6 text-center">
                      <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-xs text-white font-medium border border-white/20 group-hover:bg-white/20 transition-colors">
                        Получить карту
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
