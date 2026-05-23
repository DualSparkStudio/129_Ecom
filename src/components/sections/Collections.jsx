import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { collections } from '../../data/collections';
import { SectionHeading } from '../ui/SectionHeading';
import { scrollReveal } from '../../hooks/useScrollReveal';

export function Collections() {
  return (
    <section id="collections" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          label="Browse by Category"
          title="Collections"
          description="Four curated worlds of premium technology, each designed for a distinct way of living."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {collections.map((col, index) => (
            <motion.a
              key={col.id}
              href={`/#shop`}
              variants={scrollReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0 || index === 3 ? 'md:row-span-1' : ''
              } ${index < 2 ? 'aspect-[16/10]' : 'aspect-[16/10] md:aspect-auto md:min-h-[280px]'}`}
            >
              <img
                src={col.image}
                alt={col.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-matte via-matte/40 to-transparent" />
              <div className="absolute inset-0 bg-electric/0 group-hover:bg-electric/10 transition-colors duration-500" />

              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-electric-light text-sm uppercase tracking-wider mb-1">
                      {col.subtitle}
                    </p>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                      {col.title}
                    </h3>
                    <p className="text-white/60 text-sm max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {col.description}
                    </p>
                  </div>
                  <div className="p-3 rounded-full glass opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-white/40 text-xs mt-3">
                  {col.productCount} products
                </p>
              </div>

              <div className="absolute inset-0 ring-1 ring-inset ring-white/0 group-hover:ring-electric/30 rounded-2xl transition-all duration-500 pointer-events-none" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
