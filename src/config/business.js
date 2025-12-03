export const businessConfig = {
  name: "Velvet Beauty",
  telegramAdmin: "vyacheslav_admin", 
  currency: "₽",
  phone: "+79990000000",

  // THEME: Soft Rose & Silk
  theme: {
    bg: "bg-rose-50", // Light pink/nude background
    text: "text-slate-800", // Dark grey text for contrast
    accent: "bg-rose-400", // Dusty rose accent
    cardBg: "bg-white", // Clean white cards
    border: "border-rose-200" // Soft border
  },

  hero: {
    title: "Эстетика твоего образа",
    subtitle: "Маникюр, укладки и макияж. Ты прекрасна.",
    emoji: "🌸",
    locationUrl: "https://yandex.ru/maps"
  },

  loyalty: {
    title: "Beauty Card",
    discount: "SPA",
    description: "SPA-уход для рук в подарок при комплексе Маникюр + Педикюр."
  },

  services: [
    {
      id: 1,
      title: "Маникюр + Покрытие",
      price: 1800,
      description: "Аппаратный маникюр, выравнивание, покрытие гель-лак.",
      image: "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 2,
      title: "Вечерний Макияж",
      price: 3000,
      isPopular: true,
      description: "Стойкий образ для особого случая. Ресницы включены.",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 3,
      title: "Укладка Локоны",
      price: 2000,
      description: "Голливудская волна или серф-локоны. Стайлинг премиум.",
      image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=600"
    }
  ]
};
