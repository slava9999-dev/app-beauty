import { motion } from 'framer-motion';
import { businessConfig } from '../config/business';
import { useRef } from 'react';

const works = [
  { id: 1, image: "https://image.pollinations.ai/prompt/close%20up%20luxury%20manicure%20nail%20art%20aesthetic%20photorealistic%208k?width=600&height=800&nologo=true", title: "Маникюр" },
  { id: 2, image: "https://image.pollinations.ai/prompt/beautiful%20woman%20makeup%20close%20up%20luxury%20aesthetic%20photorealistic%208k?width=600&height=800&nologo=true", title: "Макияж" },
  { id: 3, image: "https://image.pollinations.ai/prompt/woman%20hairstyle%20long%20hair%20salon%20aesthetic%20photorealistic%208k?width=600&height=800&nologo=true", title: "Укладка" },
  { id: 4, image: "https://image.pollinations.ai/prompt/aesthetic%20pedicure%20feet%20spa%20flowers%20water%20luxury%20photorealistic%208k?width=600&height=800&nologo=true", title: "Педикюр" },
  { id: 5, image: "https://image.pollinations.ai/prompt/spa%20massage%20setting%20candles%20flowers%20relaxing%20atmosphere%20aesthetic%20photorealistic%208k?width=600&height=800&nologo=true", title: "SPA" },
];

export default function Gallery() {
  const { theme } = businessConfig;
  const scrollRef = useRef(null);

  return (
    <section className="py-16 bg-white/50 backdrop-blur-sm overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 px-4"
        >
          <span className="text-rose-500 text-sm font-semibold tracking-widest uppercase mb-2 block">
            Портфолио
          </span>
          <h2 className={`text-4xl font-bold ${theme.text} font-serif`}>
            Наши работы
          </h2>
          <p className="text-slate-400 text-sm mt-2">Листайте вправо →</p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 px-4 pb-8 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-64 h-80 rounded-2xl overflow-hidden shadow-lg relative group snap-center"
            >
              <img 
                src={work.image} 
                alt={work.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <span className="text-white font-medium tracking-wide text-lg">{work.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
