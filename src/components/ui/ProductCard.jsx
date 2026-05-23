import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Star } from 'lucide-react';
import { formatPrice } from '../../utils/formatPrice';
import { useCart } from '../../context/CartContext';
export function ProductCard({ product, index = 0 }) {
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group relative"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden rounded-2xl glass aspect-[4/5] mb-4">
          {product.badge && (
            <span className="absolute top-4 left-4 z-10 px-3 py-1 text-xs font-medium rounded-full bg-electric/90 text-white">
              {product.badge}
            </span>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-matte/80 via-transparent to-transparent z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 z-[2] flex items-end justify-center p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
            <button
              type="button"
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-electric hover:bg-electric-light text-white text-sm font-medium transition-colors shadow-glow"
              aria-label={`Add ${product.name} to cart`}
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>
          </div>
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 group-hover:ring-electric/30 transition-all duration-500 pointer-events-none" />
        </div>

        <div className="space-y-1">
          <p className="text-white/50 text-xs uppercase tracking-wider">
            {product.category}
          </p>
          <h3 className="font-display text-lg font-semibold text-white group-hover:text-electric-light transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-electric text-electric" />
              <span className="text-sm text-white/70">{product.rating}</span>
            </div>
            <span className="text-white/30 text-sm">·</span>
            <span className="text-sm text-white/50">
              {product.reviewCount} reviews
            </span>
          </div>
          <div className="flex items-center gap-2 pt-1">
            <span className="text-lg font-semibold text-white">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-white/40 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
