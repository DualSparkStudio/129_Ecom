import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Award, Lock } from 'lucide-react';
import { scrollRevealSubtle, viewport } from '../../hooks/useScrollReveal';

const trustItems = [
  { icon: ShieldCheck, label: '2-Year Warranty', sub: 'Full coverage' },
  { icon: Truck, label: 'Free Express Shipping', sub: 'Orders over $200' },
  { icon: Lock, label: 'Secure Checkout', sub: '256-bit encryption' },
  { icon: Award, label: 'Premium Certified', sub: '200+ quality checks' },
];

export function TrustBar() {
  return (
    <section className="section-padding-sm border-y border-white/[0.06] bg-deep/40">
      <div className="container-custom">
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={{
            visible: { transition: { staggerChildren: 0.06 } },
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {trustItems.map(({ icon: Icon, label, sub }) => (
            <motion.li
              key={label}
              variants={scrollRevealSubtle}
              className="flex items-center gap-4 sm:gap-5"
            >
              <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl glass flex items-center justify-center">
                <Icon className="w-5 h-5 text-electric-light" strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <p className="text-sm sm:text-[15px] font-medium text-white/90 leading-snug">
                  {label}
                </p>
                <p className="text-xs text-white/45 mt-0.5">{sub}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
