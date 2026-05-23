/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        matte: '#0a0a0b',
        deep: '#121214',
        surface: '#1a1a1e',
        border: '#2a2a30',
        electric: '#3b82f6',
        'electric-light': '#60a5fa',
        purple: '#8b5cf6',
        'purple-soft': '#a78bfa',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow':
          'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.25), transparent)',
        'purple-glow':
          'radial-gradient(ellipse 60% 40% at 80% 50%, rgba(139, 92, 246, 0.15), transparent)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(59, 130, 246, 0.2)',
        'glow-purple': '0 0 40px rgba(139, 92, 246, 0.2)',
        card: '0 4px 24px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};
