import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { showcaseItems } from '../../data/showcase';
import { SectionHeading } from '../ui/SectionHeading';
import { easePremium } from '../../hooks/useScrollReveal';

export function ProductShowcase() {
  const [active, setActive] = useState(0);
  const item = showcaseItems[active];

  const next = () => setActive((i) => (i + 1) % showcaseItems.length);
  const prev = () =>
    setActive((i) => (i - 1 + showcaseItems.length) % showcaseItems.length);

  return (
    <section className="section-padding bg-deep/40 relative overflow-hidden section-divider">
      <div className="absolute inset-0 bg-gradient-to-b from-matte/50 via-transparent to-matte/50 pointer-events-none" />
      <div className="container-custom relative">
        <SectionHeading
          label="Innovation Stories"
          title="Engineered for Tomorrow"
          description="Explore the technology pillars that power the NEURON ecosystem — built to adapt, evolve, and inspire."
        />

        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden glass-strong shadow-card min-h-[520px] sm:min-h-[560px] lg:min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: easePremium }}
              className="grid md:grid-cols-2 min-h-[520px] sm:min-h-[560px] lg:min-h-[600px]"
            >
              <div className="relative h-56 sm:h-72 md:h-auto min-h-[220px] overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  initial={{ scale: 1.06 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.9, ease: easePremium }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-transparent md:bg-gradient-to-r md:from-transparent md:via-deep/30 md:to-deep" />
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-10 md:p-12 lg:p-16 pb-24 sm:pb-28 md:pb-16">
                <span className="label-premium mb-4">
                  {String(active + 1).padStart(2, '0')} — {String(showcaseItems.length).padStart(2, '0')}
                </span>
                <h3 className="font-display text-display-md font-bold mb-3 text-balance">
                  {item.title}
                </h3>
                <p className="text-electric-light/90 text-base sm:text-lg font-medium mb-4">
                  {item.tagline}
                </p>
                <p className="text-white/55 leading-relaxed mb-8 max-w-md text-[15px] sm:text-base">
                  {item.description}
                </p>
                <ul className="flex flex-wrap gap-2 sm:gap-3">
                  {item.features.map((f) => (
                    <li
                      key={f}
                      className="px-4 py-2 rounded-full glass text-xs sm:text-sm text-white/75 font-medium"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-5 sm:bottom-6 right-5 sm:right-6 flex gap-2 z-10">
            <button
              type="button"
              onClick={prev}
              className="touch-target p-3 rounded-full glass hover:bg-white/[0.08] transition-all duration-300"
              aria-label="Previous showcase"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={next}
              className="touch-target p-3 rounded-full glass hover:bg-white/[0.08] transition-all duration-300"
              aria-label="Next showcase"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>

          <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 flex gap-2 z-10">
            {showcaseItems.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(i)}
                className={`h-1 rounded-full transition-all duration-400 ease-premium ${
                  i === active ? 'w-10 bg-electric' : 'w-5 bg-white/25 hover:bg-white/45'
                }`}
                aria-label={`Go to ${s.title}`}
                aria-current={i === active}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
