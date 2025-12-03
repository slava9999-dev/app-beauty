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
      image: "https://image.pollinations.ai/prompt/close%20up%20luxury%20manicure%20soft%20pink%20nails%20aesthetic%20photorealistic%208k?width=800&height=600&nologo=true"
    },
    {
      id: 2,
      title: "Вечерний Макияж",
      price: 3000,
      isPopular: true,
      description: "Стойкий образ для особого случая. Ресницы включены.",
      image: "https://image.pollinations.ai/prompt/beautiful%20woman%20evening%20makeup%20luxury%20fashion%20portrait%20aesthetic%20photorealistic%208k?width=800&height=600&nologo=true"
    },
    {
      id: 3,
      title: "Укладка Локоны",
      price: 2000,
      description: "Голливудская волна или серф-локоны. Стайлинг премиум.",
      image: "https://image.pollinations.ai/prompt/woman%20long%20wavy%20blonde%20hair%20luxury%20hairstyle%20back%20view%20aesthetic%20photorealistic%208k?width=800&height=600&nologo=true"
    }
  ]
};
