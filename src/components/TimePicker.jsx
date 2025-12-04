import { useState, useRef, useEffect } from 'react';

const Wheel = ({ items, selectedValue, onChange, label }) => {
  const scrollRef = useRef(null);
  const itemHeight = 40; // Height of each item in pixels

  useEffect(() => {
    if (scrollRef.current) {
      const selectedIndex = items.findIndex(item => item === selectedValue);
      if (selectedIndex !== -1) {
        scrollRef.current.scrollTop = selectedIndex * itemHeight;
      }
    }
  }, []); // Initial scroll only

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    const index = Math.round(scrollTop / itemHeight);
    if (index >= 0 && index < items.length) {
      const newValue = items[index];
      if (newValue !== selectedValue) {
        if (navigator.vibrate) navigator.vibrate(5); // Haptic feedback
        onChange(newValue);
      }
    }
  };

  return (
    <div className="relative h-40 w-24 overflow-hidden">
      {/* Highlight Bar */}
      <div className="absolute top-1/2 left-0 w-full h-10 -translate-y-1/2 border-y border-rose-200 bg-rose-50/50 pointer-events-none z-10"></div>
      
      {/* Scroll Container */}
      <div 
        ref={scrollRef}
        className="h-full overflow-y-auto snap-y snap-mandatory scrollbar-hide py-[60px]" // py = (containerHeight - itemHeight) / 2
        onScroll={handleScroll}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item) => (
          <div 
            key={item} 
            className={`h-10 flex items-center justify-center snap-center text-lg transition-colors duration-200 ${
              item === selectedValue ? 'font-bold text-rose-600' : 'text-slate-400'
            }`}
          >
            {item.toString().padStart(2, '0')}
          </div>
        ))}
      </div>
      {label && <div className="absolute top-1/2 -right-2 -translate-y-1/2 text-xs text-slate-400 font-medium pointer-events-none">{label}</div>}
    </div>
  );
};

export default function TimePicker({ value, onChange }) {
  const [selectedHour, setSelectedHour] = useState(value ? parseInt(value.split(':')[0]) : 12);
  const [selectedMinute, setSelectedMinute] = useState(value ? parseInt(value.split(':')[1]) : 0);

  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = [0, 15, 30, 45];

  const handleHourChange = (hour) => {
    setSelectedHour(hour);
    onChange(`${hour.toString().padStart(2, '0')}:${selectedMinute.toString().padStart(2, '0')}`);
  };

  const handleMinuteChange = (minute) => {
    setSelectedMinute(minute);
    onChange(`${selectedHour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="text-center mb-4">
        <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-2">Выберите время</p>
        <div className="text-3xl font-bold text-slate-800 font-serif">
          {selectedHour.toString().padStart(2, '0')}:{selectedMinute.toString().padStart(2, '0')}
        </div>
      </div>

      <div className="flex gap-8 items-center justify-center bg-white rounded-2xl shadow-inner border border-slate-100 p-4">
        <Wheel 
          items={hours} 
          selectedValue={selectedHour} 
          onChange={handleHourChange} 
          label="Ч"
        />
        <div className="text-2xl font-bold text-slate-300 pb-2">:</div>
        <Wheel 
          items={minutes} 
          selectedValue={selectedMinute} 
          onChange={handleMinuteChange} 
          label="М"
        />
      </div>
    </div>
  );
}
