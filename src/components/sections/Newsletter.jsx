import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden glass-strong p-8 md:p-16 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-electric/10 via-transparent to-purple/10 pointer-events-none" />
          <div className="relative max-w-xl mx-auto">
            <SectionHeading
              label="Stay Connected"
              title="Join the Neural Network"
              description="Early access to launches, exclusive offers, and insights from the future of technology."
              className="mb-8"
            />

            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center gap-3 py-4"
              >
                <div className="w-14 h-14 rounded-full bg-electric/20 flex items-center justify-center">
                  <Check className="w-7 h-7 text-electric-light" />
                </div>
                <p className="text-lg text-white font-medium">
                  Welcome to the network.
                </p>
                <p className="text-white/50 text-sm">
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
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-electric/50 focus:ring-1 focus:ring-electric/30 transition-all"
                />
                <Button type="submit" size="lg" className="sm:flex-shrink-0">
                  <Send className="w-4 h-4" />
                  Subscribe
                </Button>
              </form>
            )}
            <p className="text-xs text-white/30 mt-4">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
