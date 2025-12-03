import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { businessConfig } from '../config/business';

export default function BookingModal({ service, onClose }) {
  const { theme, currency, telegramAdmin } = businessConfig;
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Haptic feedback
    if (navigator.vibrate) {
      navigator.vibrate([10, 50, 10]);
    }
    
    // Формируем сообщение для Telegram
    const message = `
🌸 *Новая запись в Velvet Beauty*

👤 *Клиент:* ${formData.name}
📱 *Телефон:* ${formData.phone}
📅 *Дата:* ${formData.date}
🕐 *Время:* ${formData.time}
💅 *Услуга:* ${service.title}
💰 *Цена:* ${service.price} ${currency}
    `.trim();

    // Открываем Telegram с готовым сообщением
    const telegramUrl = `https://t.me/${telegramAdmin}?text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, '_blank');
    
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleClose = () => {
    if (navigator.vibrate) {
      navigator.vibrate(5);
    }
    onClose();
  };

  const isFormValid = formData.name && formData.phone && formData.date && formData.time;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-end md:items-center justify-center p-0 md:p-4 z-50"
        onClick={handleClose}
      >
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className={`${theme.cardBg} rounded-t-3xl md:rounded-3xl max-w-md w-full p-6 relative shadow-2xl`}
        >
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-3xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-all duration-300"
          >
            ×
          </motion.button>
          
          <h2 className={`text-2xl font-bold mb-4 ${theme.text} tracking-wide`}>
            Запись на услугу
          </h2>
          
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-6 p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl border border-rose-100"
          >
            <h3 className="font-semibold text-slate-800 mb-1">{service.title}</h3>
            <p className="text-slate-600 text-sm mb-2">{service.description}</p>
            <p className="text-xl font-bold text-rose-600">
              {service.price} {currency}
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Ваше имя
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all duration-300"
                placeholder="Анна"
                required
              />
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Телефон
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all duration-300"
                placeholder="+7 (999) 123-45-67"
                required
              />
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.25 }}
              >
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Дата
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all duration-300"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Время
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all duration-300"
                  required
                />
              </motion.div>
            </div>

            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={!isFormValid}
              className="w-full bg-gradient-to-r from-rose-400 to-rose-500 text-white py-3.5 rounded-xl font-semibold shadow-lg shadow-rose-300/50 hover:shadow-xl hover:shadow-rose-300/60 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
            >
              Отправить заявку в Telegram
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
