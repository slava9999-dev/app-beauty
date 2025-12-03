import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { businessConfig } from '../config/business';
import TimePicker from './TimePicker';

export default function BookingModal({ services, onRemoveService, onClose }) {
  const { theme, currency, telegramAdmin } = businessConfig;
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '12:00'
  });

  const totalPrice = services.reduce((sum, service) => sum + service.price, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (services.length === 0) {
      alert('Выберите хотя бы одну услугу');
      return;
    }
    
    // Haptic feedback
    if (navigator.vibrate) {
      navigator.vibrate([10, 50, 10]);
    }
    
    // Формируем список услуг
    const servicesList = services.map(s => `• ${s.title} — ${s.price} ${currency}`).join('\n');
    
    // Формируем сообщение для Telegram
    const message = `
🌸 *Новая запись в Velvet Beauty*

👤 *Клиент:* ${formData.name}
📱 *Телефон:* ${formData.phone}
📅 *Дата:* ${formData.date}
🕐 *Время:* ${formData.time}

💅 *Услуги:*
${servicesList}

💰 *Итого:* ${totalPrice} ${currency}
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

  const handleTimeChange = (time) => {
    setFormData({
      ...formData,
      time: time
    });
  };

  const handleClose = () => {
    if (navigator.vibrate) {
      navigator.vibrate(5);
    }
    onClose();
  };

  const handleRemove = (serviceId) => {
    if (navigator.vibrate) navigator.vibrate(5);
    onRemoveService(serviceId);
  };

  const isFormValid = formData.name && formData.phone && formData.date && formData.time && services.length > 0;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-0"
        onClick={handleClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className={`${theme.cardBg} w-full h-full md:h-auto md:max-h-[90vh] md:w-[600px] md:rounded-3xl overflow-y-auto shadow-2xl relative`}
        >
          {/* Header - Sticky */}
          <div className="sticky top-0 bg-white/95 backdrop-blur-xl z-10 px-6 py-4 border-b border-rose-100 flex items-center justify-between">
            <h2 className={`text-2xl font-bold ${theme.text} font-serif`}>
              Корзина ({services.length})
            </h2>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleClose}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600 text-2xl"
            >
              ×
            </motion.button>
          </div>

          {/* Content */}
          <div className="px-6 py-6 space-y-6">
            {/* Services List */}
            {services.length > 0 ? (
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-slate-700 mb-3">Выбранные услуги</h3>
                {services.map((service) => (
                  <motion.div
                    key={service.id}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl border border-rose-100"
                  >
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-800">{service.title}</h4>
                      <p className="text-sm text-slate-600">{service.description}</p>
                      <p className="text-lg font-bold text-rose-600 mt-1">
                        {service.price} {currency}
                      </p>
                    </div>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleRemove(service.id)}
                      className="ml-4 w-10 h-10 flex items-center justify-center rounded-full bg-red-100 hover:bg-red-200 text-red-600 transition-colors"
                    >
                      🗑️
                    </motion.button>
                  </motion.div>
                ))}

                {/* Total */}
                <div className="pt-4 border-t-2 border-rose-200">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-slate-700">Итого:</span>
                    <span className="text-3xl font-bold text-rose-600">{totalPrice} {currency}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-slate-400">Корзина пуста. Выберите услуги для записи.</p>
              </div>
            )}

            {/* Form */}
            {services.length > 0 && (
              <form onSubmit={handleSubmit} className="space-y-6 pt-6 border-t-2 border-rose-100">
                {/* Name */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                >
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all text-lg"
                    placeholder="Анна"
                    required
                  />
                </motion.div>

                {/* Phone */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all text-lg"
                    placeholder="+7 (999) 123-45-67"
                    required
                  />
                </motion.div>

                {/* Date */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.25 }}
                >
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Дата
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all text-lg"
                    required
                  />
                </motion.div>

                {/* Time Picker */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-sm font-semibold text-slate-700 mb-4">
                    Время
                  </label>
                  <TimePicker value={formData.time} onChange={handleTimeChange} />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={!isFormValid}
                  className="w-full bg-gradient-to-r from-rose-400 to-rose-500 text-white py-5 rounded-xl font-bold text-lg shadow-lg shadow-rose-300/50 hover:shadow-xl hover:shadow-rose-300/60 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
                >
                  Отправить заявку в Telegram
                </motion.button>
              </form>
            )}
          </div>

          {/* Bottom Padding */}
          <div className="h-6"></div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
