import { motion } from 'framer-motion';
import { scrollReveal, viewport } from '../../hooks/useScrollReveal';
import { cn } from '../../utils/cn';

export function SectionHeading({
  label,
  title,
  description,
  align = 'center',
  className = '',
}) {
  const alignClass =
    align === 'center'
      ? 'text-center mx-auto items-center'
      : align === 'left'
        ? 'text-left items-start'
        : 'text-right items-end';

  return (
    <motion.header
      variants={scrollReveal}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={cn(
        'flex flex-col max-w-2xl mb-14 sm:mb-16 md:mb-20',
        alignClass,
        className
      )}
    >
      {label && <span className="label-premium mb-4 sm:mb-5">{label}</span>}
      <h2 className="font-display text-display-md font-bold text-gradient text-balance mb-4 sm:mb-5">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-white/55 leading-relaxed max-w-prose text-balance">
          {description}
        </p>
      )}
      {align === 'center' && (
        <div
          className="mt-6 sm:mt-8 w-12 h-px bg-gradient-to-r from-transparent via-electric/50 to-transparent"
          aria-hidden
        />
      )}
    </motion.header>
  );
}
