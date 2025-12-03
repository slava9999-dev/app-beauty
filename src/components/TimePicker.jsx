import { useState } from 'react';
import { motion } from 'framer-motion';

export default function TimePicker({ value, onChange }) {
  const [selectedHour, setSelectedHour] = useState(value ? parseInt(value.split(':')[0]) : 12);
  const [selectedMinute, setSelectedMinute] = useState(value ? parseInt(value.split(':')[1]) : 0);

  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = [0, 15, 30, 45];

  const handleHourSelect = (hour) => {
    if (navigator.vibrate) navigator.vibrate(5);
    setSelectedHour(hour);
    onChange(`${hour.toString().padStart(2, '0')}:${selectedMinute.toString().padStart(2, '0')}`);
  };

  const handleMinuteSelect = (minute) => {
    if (navigator.vibrate) navigator.vibrate(5);
    setSelectedMinute(minute);
    onChange(`${selectedHour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`);
  };

  return (
    <div className="w-full">
      {/* Display */}
      <div className="text-center mb-6">
        <div className="text-5xl font-bold text-rose-500 tracking-wider font-serif">
          {selectedHour.toString().padStart(2, '0')}:{selectedMinute.toString().padStart(2, '0')}
        </div>
        <p className="text-xs text-slate-400 mt-2">Выберите время</p>
      </div>

      {/* Hours Dial */}
      <div className="mb-6">
        <p className="text-sm font-medium text-slate-700 mb-3 text-center">Часы</p>
        <div className="relative w-64 h-64 mx-auto">
          {/* Circle Background */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-rose-50 to-pink-100 border-2 border-rose-200"></div>
          
          {/* Hour Numbers */}
          {hours.map((hour) => {
            const angle = (hour * 15) - 90; // 360/24 = 15 degrees per hour
            const radius = 100;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);
            
            return (
              <motion.button
                key={hour}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleHourSelect(hour)}
                className={`absolute w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                  selectedHour === hour
                    ? 'bg-rose-500 text-white shadow-lg scale-110'
                    : 'bg-white text-slate-700 hover:bg-rose-100'
                }`}
                style={{
                  left: `calc(50% + ${x}px - 20px)`,
                  top: `calc(50% + ${y}px - 20px)`,
                }}
              >
                {hour}
              </motion.button>
            );
          })}

          {/* Center Dot */}
          <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-rose-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>

      {/* Minutes Buttons */}
      <div>
        <p className="text-sm font-medium text-slate-700 mb-3 text-center">Минуты</p>
        <div className="flex gap-2 justify-center">
          {minutes.map((minute) => (
            <motion.button
              key={minute}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleMinuteSelect(minute)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                selectedMinute === minute
                  ? 'bg-rose-500 text-white shadow-lg'
                  : 'bg-white text-slate-700 border-2 border-rose-200 hover:border-rose-400'
              }`}
            >
              :{minute.toString().padStart(2, '0')}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
