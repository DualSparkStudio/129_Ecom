import { motion } from 'framer-motion';
import { stats } from '../../data/stats';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { scrollReveal, staggerContainer, viewport } from '../../hooks/useScrollReveal';

export function Stats() {
  return (
    <section className="section-padding-sm border-y border-white/[0.06]">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-16"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={scrollReveal}
              className="text-center"
            >
              <p className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-accent mb-2 sm:mb-3 tabular-nums">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm sm:text-[15px] text-white/50 font-medium tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
