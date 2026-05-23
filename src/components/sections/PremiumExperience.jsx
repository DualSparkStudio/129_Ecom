import { motion } from 'framer-motion';
import { experiences } from '../../data/experiences';
import { SectionHeading } from '../ui/SectionHeading';
import { scrollReveal, staggerContainer, viewport } from '../../hooks/useScrollReveal';

export function PremiumExperience() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow opacity-40 pointer-events-none" />
      <div className="container-custom relative">
        <SectionHeading
          label="The NEURON Difference"
          title="Premium Experience"
          description="Every touchpoint is designed to exceed expectations — from discovery to delivery and long after unboxing."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 lg:gap-6"
        >
          {experiences.map((exp) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.id}
                variants={scrollReveal}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="card-premium p-6 sm:p-8 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-electric/15 to-purple/15 flex items-center justify-center mb-6 group-hover:shadow-glow-sm transition-shadow duration-500">
                  <Icon className="w-5 h-5 text-electric-light" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2.5 text-white leading-snug">
                  {exp.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
