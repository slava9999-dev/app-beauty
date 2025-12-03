import { businessConfig } from '../config/business';

export default function LoyaltyCard() {
  const { loyalty, theme } = businessConfig;

  return (
    <div className={`${theme.bg} py-12 px-4`}>
      <div className="max-w-4xl mx-auto">
        <div className={`${theme.cardBg} rounded-2xl shadow-xl p-8 border ${theme.border}`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className={`text-3xl font-bold ${theme.text}`}>
              {loyalty.title}
            </h2>
            <span className="text-4xl">💎</span>
          </div>
          
          <div className={`${theme.accent} bg-opacity-10 rounded-lg p-6 mb-4`}>
            <div className="text-center">
              <div className="text-sm font-semibold text-rose-600 mb-2">
                СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ
              </div>
              <div className={`text-2xl font-bold ${theme.text}`}>
                {loyalty.discount}
              </div>
            </div>
          </div>

          <p className="text-slate-600 text-center">
            {loyalty.description}
          </p>
        </div>
      </div>
    </div>
  );
}
