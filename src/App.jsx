import { useState } from 'react';
import { businessConfig } from './config/business';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import LoyaltyCard from './components/LoyaltyCard';
import BookingModal from './components/BookingModal';

function App() {
  const { services, theme, name } = businessConfig;
  const [selectedService, setSelectedService] = useState(null);

  const handleBook = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className={`min-h-screen ${theme.bg}`}>
      {/* Header */}
      <header className={`${theme.cardBg} shadow-sm border-b ${theme.border}`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className={`text-2xl font-bold ${theme.text}`}>
            {name}
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-8 ${theme.text}`}>
            Наши услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onBook={handleBook}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Loyalty Card Section */}
      <LoyaltyCard />

      {/* Footer */}
      <footer className={`${theme.cardBg} border-t ${theme.border} py-8 mt-12`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-600">
            © 2024 {name}. Все права защищены.
          </p>
          <p className="text-sm text-slate-500 mt-2">
            Создано с любовью для вашей красоты 🌸
          </p>
        </div>
      </footer>

      {/* Booking Modal */}
      {selectedService && (
        <BookingModal
          service={selectedService}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default App;
