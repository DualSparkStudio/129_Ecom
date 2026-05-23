import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { collections } from '../../data/collections';
import { SectionHeading } from '../ui/SectionHeading';
import { scrollReveal, staggerContainer, viewport } from '../../hooks/useScrollReveal';

export function Collections() {
  return (
    <section id="collections" className="section-padding section-divider">
      <div className="container-custom">
        <SectionHeading
          label="Browse by Category"
          title="Collections"
          description="Four curated worlds of premium technology, each designed for a distinct way of living and creating."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6"
        >
          {collections.map((col) => (
            <motion.a
              key={col.id}
              href="/#shop"
              variants={scrollReveal}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl aspect-[16/10] sm:aspect-[16/11] block"
            >
              <img
                src={col.image}
                alt={col.title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-matte via-matte/50 to-matte/10" />
              <div className="absolute inset-0 bg-electric/0 group-hover:bg-electric/[0.08] transition-colors duration-500" />

              <div className="absolute inset-0 p-6 sm:p-8 lg:p-10 flex flex-col justify-end">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-electric-light/90 text-xs font-semibold tracking-[0.15em] uppercase mb-2">
                      {col.subtitle}
                    </p>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                      {col.title}
                    </h3>
                    <p className="text-white/55 text-sm max-w-xs leading-relaxed opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-400">
                      {col.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 p-3 rounded-full glass opacity-100 sm:opacity-0 sm:group-hover:opacity-100 translate-y-0 sm:translate-y-2 sm:group-hover:translate-y-0 transition-all duration-400">
                    <ArrowUpRight className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <p className="text-white/40 text-xs mt-4 font-medium">
                  {col.productCount} products
                </p>
              </div>

              <div className="absolute inset-0 ring-1 ring-inset ring-white/0 group-hover:ring-white/15 rounded-2xl sm:rounded-3xl transition-all duration-500 pointer-events-none" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
