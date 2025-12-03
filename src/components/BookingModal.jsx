import { useState } from 'react';
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

  const isFormValid = formData.name && formData.phone && formData.date && formData.time;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className={`${theme.cardBg} rounded-2xl max-w-md w-full p-6 relative`}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-2xl"
        >
          ×
        </button>
        
        <h2 className={`text-2xl font-bold mb-4 ${theme.text}`}>
          Запись на услугу
        </h2>
        
        <div className="mb-4 p-4 bg-rose-50 rounded-lg">
          <h3 className="font-semibold text-slate-800">{service.title}</h3>
          <p className="text-slate-600 text-sm">{service.description}</p>
          <p className="text-lg font-bold text-slate-800 mt-2">
            {service.price} {currency}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Ваше имя
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
              placeholder="Анна"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Телефон
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
              placeholder="+7 (999) 123-45-67"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Дата
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Время
            </label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
              required
            />
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full ${theme.accent} text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            Отправить заявку в Telegram
          </button>
        </form>
      </div>
    </div>
  );
}
