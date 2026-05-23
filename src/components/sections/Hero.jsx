import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '../ui/Button';
import { products } from '../../data/products';

const heroProduct = products[0];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-purple-glow pointer-events-none opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.08),transparent_50%)]" />

      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-8rem)]">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-electric animate-pulse" />
              <span className="text-sm text-white/70">
                AI-Powered Lifestyle Technology
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6"
            >
              <span className="block text-gradient">Technology</span>
              <span className="block text-gradient-accent">Reimagined.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/60 leading-relaxed mb-8 max-w-lg"
            >
              Premium gadgets, immersive audio, and intelligent workspace
              products — engineered for those who shape tomorrow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/#shop">
                <Button size="lg" className="group">
                  Explore Collection
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to={`/product/${heroProduct.id}`}>
                <Button variant="secondary" size="lg" className="group">
                  <Play className="w-4 h-4" />
                  View Flagship
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-8 mt-12 pt-8 border-t border-white/10"
            >
              <div>
                <p className="font-display text-2xl font-bold">250K+</p>
                <p className="text-sm text-white/50">Customers Worldwide</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <p className="font-display text-2xl font-bold">4.9★</p>
                <p className="text-sm text-white/50">Average Rating</p>
              </div>
              <div className="w-px h-12 bg-white/10 hidden sm:block" />
              <div className="hidden sm:block">
                <p className="font-display text-2xl font-bold">48</p>
                <p className="text-sm text-white/50">Countries</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg aspect-square">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-electric/20 to-purple/20 blur-3xl"
              />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="relative z-10 w-full h-full flex items-center justify-center"
              >
                <div className="relative w-[85%] aspect-square rounded-3xl glass-strong p-8 shadow-glow overflow-hidden">
                  <img
                    src={heroProduct.image}
                    alt={heroProduct.name}
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                  <div className="absolute bottom-6 left-6 right-6 glass rounded-xl p-4">
                    <p className="text-xs text-electric-light uppercase tracking-wider mb-1">
                      Featured
                    </p>
                    <p className="font-display font-semibold text-lg">
                      {heroProduct.name}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-10%] border border-white/5 rounded-full pointer-events-none"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-5%] border border-dashed border-electric/10 rounded-full pointer-events-none"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
