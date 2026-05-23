import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import { SectionHeading } from '../ui/SectionHeading';
import { scrollReveal } from '../../hooks/useScrollReveal';

export function Testimonials() {
  return (
    <section className="section-padding bg-deep/30 overflow-hidden">
      <div className="container-custom">
        <SectionHeading
          label="Trusted Worldwide"
          title="What Creators Say"
          description="Join a global community of innovators who have elevated their daily experience with NEURON."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.blockquote
              key={t.id}
              variants={scrollReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.08 }}
              className="glass rounded-2xl p-6 md:p-8 relative group hover:bg-white/[0.07] transition-colors duration-300"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-electric/20" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-electric text-electric"
                  />
                ))}
              </div>
              <p className="text-white/80 leading-relaxed mb-6 text-sm md:text-base">
                &ldquo;{t.text}&rdquo;
              </p>
              <footer className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-electric/30"
                />
                <div>
                  <cite className="not-italic font-semibold text-white block">
                    {t.name}
                  </cite>
                  <span className="text-sm text-white/50">{t.role}</span>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
