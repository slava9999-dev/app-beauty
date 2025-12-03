import { motion } from 'framer-motion';
import { useState } from 'react';
import TimePicker from './TimePicker';

/**
 * Компонент объединяет выбор даты (input type="date") и кастомный циферблат для выбора времени.
 * Дизайн соответствует премиум‑теме проекта и имеет тактильную обратную связь.
 */
export default function DateTimePicker({ value, onChange }) {
  // value format: "YYYY-MM-DD HH:mm"
  const [datePart, setDatePart] = useState(value ? value.split(' ')[0] : '');
  const [timePart, setTimePart] = useState(value ? value.split(' ')[1] : '12:00');

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDatePart(newDate);
    onChange(`${newDate} ${timePart}`);
    if (navigator.vibrate) navigator.vibrate(5);
  };

  const handleTimeChange = (newTime) => {
    setTimePart(newTime);
    onChange(`${datePart} ${newTime}`);
  };

  return (
    <div className="space-y-4">
      {/* Date input */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <label className="block text-sm font-medium text-slate-700 mb-2">Дата</label>
        <input
          type="date"
          value={datePart}
          onChange={handleDateChange}
          className="w-full px-4 py-3 border-2 border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 transition-all"
          required
        />
      </motion.div>

      {/* Time picker (circular dial) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <TimePicker value={timePart} onChange={handleTimeChange} />
      </motion.div>
    </div>
  );
}
