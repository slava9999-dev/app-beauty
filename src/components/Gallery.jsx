import { motion } from 'framer-motion';
import { businessConfig } from '../config/business';

const works = [
  { id: 1, image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=400", title: "Маникюр" },
  { id: 2, image: "https://images.unsplash.com/photo-1596462502278-27bfdd403348?auto=format&fit=crop&q=80&w=400", title: "Макияж" },
  { id: 3, image: "https://images.unsplash.com/photo-1522337360705-8b13d5a38602?auto=format&fit=crop&q=80&w=400", title: "Укладка" },
  { id: 4, image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=400", title: "Педикюр" },
];

export default function Gallery() {
  const { theme } = businessConfig;

  return (
    <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-rose-500 text-sm font-semibold tracking-widest uppercase mb-2 block">
            Портфолио
          </span>
          <h2 className={`text-4xl font-bold ${theme.text} font-serif`}>
            Наши работы
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="aspect-square rounded-2xl overflow-hidden shadow-md relative group cursor-pointer"
            >
              <img 
                src={work.image} 
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium tracking-wide">{work.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
