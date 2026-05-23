import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const variants = {
  primary:
    'bg-electric hover:bg-electric-light text-white shadow-glow',
  secondary:
    'glass hover:bg-white/10 text-white border-white/20',
  ghost: 'bg-transparent hover:bg-white/5 text-white/80 hover:text-white',
  outline:
    'bg-transparent border border-white/20 hover:border-electric/50 hover:text-electric-light text-white',
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
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  return (
    <motion.button
      type={type}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'inline-flex items-center justify-center gap-2 font-medium rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-matte disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
