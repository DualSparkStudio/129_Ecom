/** Premium easing — smooth, confident, not bouncy */
export const easePremium = [0.22, 1, 0.36, 1];

export const scrollReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easePremium },
  },
};

export const scrollRevealSubtle = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easePremium },
  },
};

/** Parent wrapper — must NOT set opacity:0 on hidden or children stay invisible */
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.55, ease: easePremium } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.65, ease: easePremium },
  },
};

export const viewport = {
  once: true,
  margin: '0px 0px -80px 0px',
  amount: 0.1,
};
