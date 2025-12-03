import { businessConfig } from '../config/business';

export default function Hero() {
  const { hero, theme } = businessConfig;

  return (
    <div className={`${theme.bg} ${theme.text} py-16 px-4 text-center`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-6xl mb-4">{hero.emoji}</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {hero.title}
        </h1>
        <p className="text-lg md:text-xl text-slate-600">
          {hero.subtitle}
        </p>
      </div>
    </div>
  );
}
