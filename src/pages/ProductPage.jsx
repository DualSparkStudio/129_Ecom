import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Star,
  Minus,
  Plus,
  ShoppingBag,
  ChevronLeft,
  Truck,
  Shield,
  RotateCcw,
} from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/formatPrice';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/ui/ProductCard';
import { LazyImage } from '../components/ui/LazyImage';
import { easePremium } from '../hooks/useScrollReveal';

const productReviews = [
  {
    id: 1,
    author: 'Alex Rivera',
    rating: 5,
    date: 'March 2026',
    text: 'Exceeded every expectation. Build quality is exceptional and the AI features actually work seamlessly in daily use.',
  },
  {
    id: 2,
    author: 'Mia Thompson',
    rating: 5,
    date: 'February 2026',
    text: 'Best purchase I have made this year. The attention to detail in packaging and product design is unmatched.',
  },
  {
    id: 3,
    author: 'Chris Nakamura',
    rating: 4,
    date: 'January 2026',
    text: 'Incredible product overall. Took one star off only because I wanted more color options. Performance is flawless.',
  },
];

export function ProductPage() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24 px-4">
        <h1 className="font-display text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="text-white/60 mb-8">
          The product you are looking for does not exist.
        </p>
        <Link to="/">
          <Button>Back to Shop</Button>
        </Link>
      </div>
    );
  }

  const related = getRelatedProducts(product.id);
  const images = product.images || [product.image];

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  return (
    <div className="pt-28 sm:pt-32 pb-24 sm:pb-28">
      <div className="container-custom px-5 sm:px-8 lg:px-10">
        <Link
          to="/#shop"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium mb-10 sm:mb-12 transition-colors duration-300"
        >
          <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
          Back to Shop
        </Link>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: easePremium }}
            className="space-y-4 sm:space-y-5"
          >
            <div className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden glass-strong shadow-card">
              <LazyImage
                src={images[activeImage]}
                alt={product.name}
                className="w-full h-full"
              />
            </div>
            <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
              {images.map((img, i) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden ring-2 transition-all duration-300 ${
                    i === activeImage
                      ? 'ring-electric shadow-glow-sm'
                      : 'ring-transparent opacity-55 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: easePremium }}
            className="flex flex-col lg:py-4"
          >
            {product.badge && (
              <span className="inline-flex self-start px-3 py-1.5 text-[11px] font-semibold tracking-wide uppercase rounded-full bg-electric/15 text-electric-light border border-electric/20 mb-5">
                {product.badge}
              </span>
            )}
            <p className="label-premium mb-4">{product.category}</p>
            <h1 className="font-display text-display-md font-bold mb-5 sm:mb-6 text-balance">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-electric text-electric'
                        : 'text-white/20'
                    }`}
                  />
                ))}
              </div>
              <span className="text-white/60 text-sm">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-3xl sm:text-4xl font-bold tabular-nums tracking-tight">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-white/35 line-through tabular-nums">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            <p className="text-white/55 leading-relaxed mb-10 text-[15px] sm:text-base max-w-prose">
              {product.description}
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {product.features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2 text-sm text-white/80"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-electric" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm text-white/50">Quantity</span>
              <div className="flex items-center gap-2 glass rounded-full p-1">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center font-medium tabular-nums">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <Button size="lg" className="w-full sm:w-auto mb-8" onClick={handleAddToCart}>
              <ShoppingBag className="w-5 h-5" />
              Add to Cart — {formatPrice(product.price * quantity)}
            </Button>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-8 border-t border-white/[0.06]">
              {[
                { icon: Truck, label: 'Free Express Shipping' },
                { icon: Shield, label: '2-Year Warranty' },
                { icon: RotateCcw, label: '30-Day Returns' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center gap-2.5 p-3 rounded-2xl glass"
                >
                  <Icon className="w-5 h-5 text-electric-light" strokeWidth={1.5} />
                  <span className="text-[11px] sm:text-xs text-white/50 leading-snug">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {product.specs && (
          <section className="mb-20 sm:mb-28 section-divider pt-16 sm:pt-20">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8">
              Specifications
            </h2>
            <div className="glass-strong rounded-2xl sm:rounded-3xl overflow-hidden">
              <dl className="divide-y divide-white/[0.06]">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div
                    key={key}
                    className="grid grid-cols-2 sm:grid-cols-3 px-6 py-4"
                  >
                    <dt className="text-white/50 capitalize">{key}</dt>
                    <dd className="sm:col-span-2 text-white font-medium">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        )}

        <section className="mb-20 sm:mb-28 section-divider pt-16 sm:pt-20">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8">
            Customer Reviews
          </h2>
          <div className="space-y-4 sm:space-y-5">
            {productReviews.map((review) => (
              <div key={review.id} className="card-premium p-6 sm:p-8">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="font-semibold">{review.author}</p>
                    <p className="text-sm text-white/50">{review.date}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-electric text-electric"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-white/70 leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        </section>

        {related.length > 0 && (
          <section className="section-divider pt-16 sm:pt-20">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-10 sm:mb-12">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
