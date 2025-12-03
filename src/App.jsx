import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { businessConfig } from './config/business';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import LoyaltyCard from './components/LoyaltyCard';
import BookingModal from './components/BookingModal';
import Preloader from './components/Preloader';

import InstallHint from './components/InstallHint';
import Gallery from './components/Gallery';

function App() {
  const { services, theme, name, telegramAdmin } = businessConfig;
  const [selectedService, setSelectedService] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Имитация загрузки ресурсов
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleBook = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`min-h-screen ${theme.bg}`}
        >
          {/* Install App Hint */}
          <InstallHint />

          {/* Glassmorphism Header - Sticky */}
          <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.2 }}
            className="sticky top-0 z-40 backdrop-blur-xl bg-white/70 shadow-sm border-b border-white/20"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
              <h1 className={`text-2xl font-bold ${theme.text} tracking-widest font-serif`}>
                {name}
              </h1>
              <button className="text-sm font-medium text-rose-500 hover:text-rose-600 transition-colors tracking-wide">
                МЕНЮ
              </button>
            </div>
          </motion.header>

          {/* Hero Section */}
          <Hero />

          {/* Services Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <span className="text-rose-500 text-sm font-semibold tracking-widest uppercase mb-2 block">
                  Наше меню
                </span>
                <h2 className={`text-5xl font-bold ${theme.text} font-serif`}>
                  Услуги & Ритуалы
                </h2>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    <ServiceCard
                      service={service}
                      onBook={handleBook}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <Gallery />

          {/* Loyalty Card Section */}
          <LoyaltyCard />

          {/* Footer */}
          <footer className="backdrop-blur-xl bg-white/70 border-t border-white/20 py-16 mt-20">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className={`text-2xl font-bold ${theme.text} mb-4 font-serif tracking-wide`}>
                  {name}
                </h3>
                <p className="text-slate-600 font-medium mb-6">
                  © 2024 Все права защищены.
                </p>
                <div className="flex justify-center gap-6 mb-8">
                  <a href="#" className="text-slate-400 hover:text-rose-500 transition-colors">Instagram</a>
                  <a href={`https://t.me/${telegramAdmin}`} className="text-slate-400 hover:text-rose-500 transition-colors">Telegram</a>
                  <a href="#" className="text-slate-400 hover:text-rose-500 transition-colors">WhatsApp</a>
                </div>
                <p className="text-xs text-slate-400 tracking-widest uppercase flex items-center justify-center gap-2">
                  Designed with <span className="text-rose-400">♥</span> for Beauty
                </p>
              </motion.div>
            </div>
          </footer>

          {/* Booking Modal */}
          {selectedService && (
            <BookingModal
              service={selectedService}
              onClose={closeModal}
            />
          )}

          {/* Telegram FAB */}
          <motion.a
            href={`https://t.me/${telegramAdmin}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 left-6 w-14 h-14 bg-gradient-to-tr from-sky-500 to-blue-600 rounded-full shadow-lg shadow-sky-500/30 flex items-center justify-center text-white z-40 hover:shadow-sky-500/50 transition-shadow"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </motion.a>
        </motion.div>
      )}
    </>
  );
}

export default App;
