import { businessConfig } from '../config/business';

export default function ServiceCard({ service, onBook }) {
  const { theme, currency } = businessConfig;

  return (
    <div className={`${theme.cardBg} rounded-2xl shadow-lg overflow-hidden border ${theme.border} transition-transform hover:scale-105`}>
      <div className="h-48 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className={`text-xl font-bold mb-2 ${theme.text}`}>
          {service.title}
        </h3>
        <p className="text-slate-600 mb-4 text-sm">
          {service.description}
        </p>
        <div className="flex items-center justify-between">
          <span className={`text-2xl font-bold ${theme.text}`}>
            {service.price} {currency}
          </span>
          <button
            onClick={() => onBook(service)}
            className={`${theme.accent} text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity`}
          >
            Записаться
          </button>
        </div>
      </div>
    </div>
  );
}
