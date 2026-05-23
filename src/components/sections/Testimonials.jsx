import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import { SectionHeading } from '../ui/SectionHeading';
import { scrollReveal, staggerContainer, viewport } from '../../hooks/useScrollReveal';

export function Testimonials() {
  return (
    <section className="section-padding section-divider bg-deep/50">
      <div className="container-custom">
        <SectionHeading
          label="Trusted Worldwide"
          title="What Creators Say"
          description="Join a global community of innovators who have elevated their daily experience with NEURON."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {testimonials.map((t) => (
            <motion.blockquote
              key={t.id}
              variants={scrollReveal}
              className="card-premium p-6 sm:p-8 relative flex flex-col h-full"
            >
              <Quote
                className="absolute top-6 right-6 w-8 h-8 text-electric/15"
                strokeWidth={1}
              />
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-electric text-electric" />
                ))}
              </div>
              <p className="text-white/75 leading-relaxed mb-8 flex-1 text-[15px] sm:text-base">
                &ldquo;{t.text}&rdquo;
              </p>
              <footer className="flex items-center gap-4 pt-6 border-t border-white/[0.06]">
                <img
                  src={t.avatar}
                  alt=""
                  loading="lazy"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-electric/20"
                />
                <div>
                  <cite className="not-italic font-semibold text-white text-sm sm:text-base block">
                    {t.name}
                  </cite>
                  <span className="text-xs sm:text-sm text-white/45">{t.role}</span>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
