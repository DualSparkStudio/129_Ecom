import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../utils/cn';
import { easePremium } from '../../hooks/useScrollReveal';

const navLinks = [
  { label: 'Shop', href: '/#shop' },
  { label: 'Collections', href: '/#collections' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, toggleCart } = useCart();
  const location = useLocation();
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen, location.pathname]);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    if (href.startsWith('/#')) {
      const id = href.slice(2);
      if (location.pathname === '/') {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <motion.header
        initial={reduced ? false : { y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: easePremium }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 transition-all duration-500 ease-premium',
          scrolled ? 'pt-3' : 'pt-5 sm:pt-6'
        )}
      >
        <nav
          className={cn(
            'container-custom flex items-center justify-between rounded-2xl sm:rounded-3xl transition-all duration-500 ease-premium px-4 sm:px-6',
            scrolled
              ? 'glass-strong shadow-card py-3 sm:py-3.5'
              : 'bg-transparent py-1'
          )}
          aria-label="Main navigation"
        >
          <Link
            to="/"
            className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white hover:text-white/90 transition-colors duration-300"
          >
            NEUR<span className="text-electric">ON</span>
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="relative px-4 py-2 text-[13px] font-medium tracking-wide text-white/60 hover:text-white transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-4 right-4 h-px scale-x-0 bg-electric group-hover:scale-x-100 transition-transform duration-300 ease-premium origin-left" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={toggleCart}
              className="touch-target relative p-2.5 rounded-full glass hover:bg-white/[0.08] transition-all duration-300"
              aria-label={`Shopping cart, ${itemCount} items`}
            >
              <ShoppingBag className="w-5 h-5 text-white/90" strokeWidth={1.5} />
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-0.5 -right-0.5 min-w-[20px] h-5 px-1 flex items-center justify-center text-[10px] font-bold bg-electric rounded-full text-white"
                >
                  {itemCount > 9 ? '9+' : itemCount}
                </motion.span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden touch-target p-2.5 rounded-full glass hover:bg-white/[0.08] transition-all duration-300"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-matte/80 backdrop-blur-md"
              onClick={() => setMobileOpen(false)}
              aria-hidden
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 32, stiffness: 320 }}
              className="absolute right-0 top-0 bottom-0 w-[min(320px,88vw)] glass-strong border-l border-white/[0.08] p-8 pt-28"
            >
              <ul className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, ease: easePremium }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className="block py-4 font-display text-2xl text-white/90 hover:text-electric-light transition-colors border-b border-white/[0.06]"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <p className="mt-10 text-xs text-white/35 leading-relaxed">
                Premium technology for the modern creator. Secure checkout &amp; worldwide shipping.
              </p>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
