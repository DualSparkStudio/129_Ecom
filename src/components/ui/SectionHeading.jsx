import { motion } from 'framer-motion';
import { scrollReveal } from '../../hooks/useScrollReveal';

export function SectionHeading({
  label,
  title,
  description,
  align = 'center',
  className = '',
}) {
  const alignClass =
    align === 'center'
      ? 'text-center mx-auto'
      : align === 'left'
        ? 'text-left'
        : 'text-right';

  return (
    <motion.div
      variants={scrollReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={`max-w-2xl mb-12 md:mb-16 ${alignClass} ${className}`}
    >
      {label && (
        <span className="inline-block text-electric-light text-sm font-medium tracking-widest uppercase mb-3">
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gradient mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-white/60 text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
