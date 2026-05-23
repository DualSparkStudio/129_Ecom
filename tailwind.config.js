/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        matte: '#08080a',
        deep: '#0f0f12',
        surface: '#16161a',
        'surface-elevated': '#1c1c22',
        border: '#2a2a32',
        muted: '#71717a',
        electric: '#3b82f6',
        'electric-light': '#60a5fa',
        purple: '#8b5cf6',
        'purple-soft': '#a78bfa',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.75rem,6vw,5rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2rem,4vw,3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(1.75rem,3vw,2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
      },
      maxWidth: {
        prose: '65ch',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow':
          'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.18), transparent)',
        'purple-glow':
          'radial-gradient(ellipse 60% 40% at 80% 50%, rgba(139, 92, 246, 0.12), transparent)',
        'card-shine':
          'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.03) 50%, transparent 60%)',
      },
      boxShadow: {
        glow: '0 0 48px rgba(59, 130, 246, 0.15)',
        'glow-sm': '0 0 24px rgba(59, 130, 246, 0.12)',
        card: '0 8px 32px rgba(0, 0, 0, 0.35)',
        'card-hover': '0 16px 48px rgba(0, 0, 0, 0.45)',
        inner: 'inset 0 1px 0 rgba(255, 255, 255, 0.06)',
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
