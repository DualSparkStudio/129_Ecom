import { motion } from 'framer-motion';
import { experiences } from '../../data/experiences';
import { SectionHeading } from '../ui/SectionHeading';
import { scrollReveal, staggerContainer } from '../../hooks/useScrollReveal';

export function PremiumExperience() {
  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 bg-hero-glow opacity-50 pointer-events-none" />
      <div className="container-custom relative">
        <SectionHeading
          label="The NEURON Difference"
          title="Premium Experience"
          description="Every touchpoint is designed to exceed expectations — from discovery to delivery and beyond."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.id}
                variants={scrollReveal}
                whileHover={{ y: -4 }}
                className={`glass rounded-2xl p-6 md:p-8 group hover:shadow-glow transition-shadow duration-500 ${
                  index === 0 || index === 4 ? 'lg:col-span-1' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric/20 to-purple/20 flex items-center justify-center mb-5 group-hover:shadow-glow transition-shadow">
                  <Icon className="w-6 h-6 text-electric-light" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 text-white">
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
