import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check, Lock } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { scrollReveal, viewport } from '../../hooks/useScrollReveal';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative rounded-3xl overflow-hidden glass-strong p-8 sm:p-12 md:p-16 lg:p-20 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-electric/[0.08] via-transparent to-purple/[0.06] pointer-events-none" />
          <div className="relative max-w-xl mx-auto">
            <SectionHeading
              label="Stay Connected"
              title="Join the Neural Network"
              description="Early access to launches, exclusive offers, and insights from the future of technology."
              className="mb-10 sm:mb-12"
            />

            {submitted ? (
              <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center gap-4 py-6"
              >
                <div className="w-16 h-16 rounded-full bg-electric/15 flex items-center justify-center ring-1 ring-electric/30">
                  <Check className="w-8 h-8 text-electric-light" strokeWidth={1.5} />
                </div>
                <p className="text-xl text-white font-display font-semibold">
                  Welcome to the network.
                </p>
                <p className="text-white/50 text-sm sm:text-base">
                  Check your inbox for a confirmation from NEURON.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="flex-1 px-5 py-4 sm:py-4 rounded-2xl sm:rounded-full bg-white/[0.04] border border-white/10 text-white placeholder:text-white/35 focus:outline-none focus:border-electric/40 focus:ring-1 focus:ring-electric/20 transition-all duration-300 text-base"
                />
                <Button type="submit" size="lg" className="sm:flex-shrink-0 w-full sm:w-auto">
                  <Send className="w-4 h-4" />
                  Subscribe
                </Button>
              </form>
            )}
            <p className="flex items-center justify-center gap-2 text-xs text-white/35 mt-5 sm:mt-6">
              <Lock className="w-3.5 h-3.5" />
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
