import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { easePremium } from '../../hooks/useScrollReveal';

const variants = {
  primary:
    'bg-electric hover:bg-electric-light text-white shadow-glow-sm border border-electric/20',
  secondary:
    'glass hover:bg-white/[0.08] text-white border-white/10 hover:border-white/20',
  ghost:
    'bg-transparent hover:bg-white/5 text-white/75 hover:text-white',
  outline:
    'bg-transparent border border-white/15 hover:border-electric/40 hover:text-electric-light text-white/90',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button',
  disabled,
  ...props
}) {
  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-[15px] sm:text-base',
  };

  return (
    <motion.button
      type={type}
      whileHover={disabled ? {} : { scale: 1.02, y: -1 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      transition={{ duration: 0.25, ease: easePremium }}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'btn-shine inline-flex items-center justify-center gap-2.5 font-medium rounded-full',
        'transition-colors duration-400 ease-premium',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-matte',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2.5">{children}</span>
    </motion.button>
  );
}
