import { motion } from 'framer-motion';
import { stats } from '../../data/stats';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { scrollReveal } from '../../hooks/useScrollReveal';

export function Stats() {
  return (
    <section className="section-padding border-y border-white/5">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={scrollReveal}
              className="text-center"
            >
              <p className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gradient-accent mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-white/50 text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
