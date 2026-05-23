import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Star } from 'lucide-react';
import { formatPrice } from '../../utils/formatPrice';
import { useCart } from '../../context/CartContext';
import { scrollReveal, viewport } from '../../hooks/useScrollReveal';

export function ProductCard({ product, staggered = false }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <motion.article
      variants={scrollReveal}
      initial={staggered ? false : 'hidden'}
      whileInView={staggered ? undefined : 'visible'}
      viewport={staggered ? undefined : viewport}
      className="group relative"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl glass aspect-[4/5] mb-4 sm:mb-6">
          {product.badge && (
            <span className="absolute top-4 left-4 z-10 px-3 py-1.5 text-[11px] font-semibold tracking-wide uppercase rounded-full bg-electric/90 text-white backdrop-blur-sm">
              {product.badge}
            </span>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-matte/90 via-matte/20 to-transparent z-[1] opacity-60 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500" />

          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 ease-premium sm:group-hover:scale-[1.04]"
          />

          <div className="absolute inset-x-0 bottom-0 z-[2] p-3 sm:p-4 sm:opacity-0 sm:translate-y-2 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-400 ease-premium">
            <button
              type="button"
              onClick={handleAddToCart}
              className="touch-target w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-electric hover:bg-electric-light text-white text-sm font-medium transition-all duration-300 shadow-glow-sm active:scale-[0.98]"
              aria-label={`Add ${product.name} to cart`}
            >
              <ShoppingBag className="w-4 h-4" />
              {added ? 'Added ✓' : 'Add to Cart'}
            </button>
          </div>

          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-inset ring-white/0 group-hover:ring-electric/25 transition-all duration-500 pointer-events-none" />
        </div>

        <div className="space-y-2 px-0.5">
          <p className="text-[11px] sm:text-xs text-white/45 uppercase tracking-[0.15em] font-medium">
            {product.category}
          </p>
          <h3 className="font-display text-lg sm:text-xl font-semibold text-white group-hover:text-electric-light transition-colors duration-300 leading-snug">
            {product.name}
          </h3>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-electric text-electric" />
              <span className="text-white/70 font-medium">{product.rating}</span>
            </div>
            <span className="text-white/25">·</span>
            <span className="text-white/45">{product.reviewCount} reviews</span>
          </div>
          <div className="flex items-baseline gap-2.5 pt-1">
            <span className="text-lg sm:text-xl font-semibold text-white tracking-tight">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-white/35 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
