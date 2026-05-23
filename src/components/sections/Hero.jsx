import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '../ui/Button';
import { products } from '../../data/products';
import { easePremium } from '../../hooks/useScrollReveal';

const heroProduct = products[0];

const fadeUp = (delay = 0, reduced = false) => ({
  initial: reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: easePremium },
});

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden pt-28 sm:pt-32 pb-20 sm:pb-24">
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[min(600px,80vw)] h-[min(600px,80vw)] bg-purple-glow pointer-events-none opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.06),transparent_45%)]" />

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '72px 72px',
        }}
        aria-hidden
      />

      <div className="container-custom relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 xl:gap-20 items-center">
          <div className="max-w-xl lg:max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            <motion.div
              {...fadeUp(0, reduced)}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-8 sm:mb-10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric opacity-40" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-electric" />
              </span>
              <span className="text-xs sm:text-sm text-white/70 font-medium tracking-wide">
                AI-Powered Lifestyle Technology
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.08, reduced)}
              className="font-display text-display-xl font-bold mb-6 sm:mb-8 text-balance"
            >
              <span className="block text-gradient">Technology</span>
              <span className="block text-gradient-accent mt-1">Reimagined.</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.16, reduced)}
              className="text-lg sm:text-xl text-white/55 leading-relaxed mb-10 sm:mb-12 max-w-lg mx-auto lg:mx-0 text-balance"
            >
              Premium gadgets, immersive audio, and intelligent workspace
              products — engineered for those who shape tomorrow.
            </motion.p>

            <motion.div
              {...fadeUp(0.24, reduced)}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Link to="/#shop" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto group">
                  Explore Collection
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Button>
              </Link>
              <Link to={`/product/${heroProduct.id}`} className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto group">
                  <Play className="w-4 h-4" />
                  View Flagship
                </Button>
              </Link>
            </motion.div>

            <motion.div
              {...fadeUp(0.36, reduced)}
              className="grid grid-cols-3 gap-4 sm:gap-8 mt-14 sm:mt-16 pt-8 sm:pt-10 border-t border-white/[0.08] max-w-md mx-auto lg:mx-0 lg:max-w-none"
            >
              {[
                { value: '250K+', label: 'Customers' },
                { value: '4.9★', label: 'Avg. Rating' },
                { value: '48', label: 'Countries' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="font-display text-xl sm:text-2xl font-bold text-white tabular-nums">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-white/45 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={reduced ? { opacity: 1 } : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: easePremium }}
            className="relative flex justify-center lg:justify-end order-first lg:order-last"
          >
            <div className="relative w-full max-w-[min(420px,90vw)] aspect-square">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-electric/15 to-purple/15 blur-3xl motion-safe:animate-float" />

              <div className="relative z-10 w-full h-full flex items-center justify-center p-4 sm:p-0">
                <div className="relative w-full aspect-square rounded-3xl glass-strong p-6 sm:p-10 shadow-glow overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />
                  <img
                    src={heroProduct.image}
                    alt={heroProduct.name}
                    className="relative w-full h-full object-contain drop-shadow-2xl"
                    fetchPriority="high"
                  />
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 glass rounded-2xl p-4 sm:p-5 backdrop-blur-xl">
                    <p className="label-premium mb-2 before:w-4">Featured</p>
                    <p className="font-display font-semibold text-base sm:text-lg text-white">
                      {heroProduct.name}
                    </p>
                  </div>
                </div>
              </div>

              {!reduced && (
                <>
                  <div className="absolute inset-[-8%] border border-white/[0.04] rounded-full pointer-events-none hidden sm:block" />
                  <div className="absolute inset-[-4%] border border-dashed border-electric/[0.08] rounded-full pointer-events-none hidden sm:block motion-safe:animate-[spin_60s_linear_infinite]" />
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
