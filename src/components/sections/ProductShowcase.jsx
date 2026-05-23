import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { showcaseItems } from '../../data/showcase';
import { SectionHeading } from '../ui/SectionHeading';

export function ProductShowcase() {
  const [active, setActive] = useState(0);
  const item = showcaseItems[active];

  const next = () => setActive((i) => (i + 1) % showcaseItems.length);
  const prev = () =>
    setActive((i) => (i - 1 + showcaseItems.length) % showcaseItems.length);

  return (
    <section className="section-padding bg-deep/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-matte via-transparent to-matte pointer-events-none" />
      <div className="container-custom relative">
        <SectionHeading
          label="Innovation Stories"
          title="Engineered for Tomorrow"
          description="Explore the technology pillars that power the NEURON ecosystem."
        />

        <div className="relative rounded-3xl overflow-hidden glass min-h-[500px] md:min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 min-h-[500px] md:min-h-[600px]"
            >
              <div className="relative h-64 md:h-auto overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-deep/90 md:bg-gradient-to-r md:from-transparent md:to-deep" />
              </div>

              <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`inline-block text-sm font-medium bg-gradient-to-r ${item.accent} bg-clip-text text-transparent mb-2`}
                >
                  {String(active + 1).padStart(2, '0')} / {String(showcaseItems.length).padStart(2, '0')}
                </motion.span>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-2"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className="text-electric-light text-lg mb-4"
                >
                  {item.tagline}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-white/60 leading-relaxed mb-8 max-w-md"
                >
                  {item.description}
                </motion.p>
                <motion.ul
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="flex flex-wrap gap-3"
                >
                  {item.features.map((f) => (
                    <li
                      key={f}
                      className="px-4 py-2 rounded-full glass text-sm text-white/80"
                    >
                      {f}
                    </li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-6 right-6 flex gap-2 z-10">
            <button
              type="button"
              onClick={prev}
              className="p-3 rounded-full glass hover:bg-white/10 transition-colors"
              aria-label="Previous showcase"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="p-3 rounded-full glass hover:bg-white/10 transition-colors"
              aria-label="Next showcase"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute bottom-6 left-6 flex gap-2 z-10">
            {showcaseItems.map((_, i) => (
              <button
                key={showcaseItems[i].id}
                type="button"
                onClick={() => setActive(i)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === active ? 'w-8 bg-electric' : 'w-4 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to ${showcaseItems[i].title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
