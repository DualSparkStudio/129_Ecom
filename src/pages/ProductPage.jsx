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
    <div className="pt-24 pb-20">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <Link
          to="/#shop"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="aspect-square rounded-2xl overflow-hidden glass">
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
                  className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden ring-2 transition-all ${
                    i === activeImage
                      ? 'ring-electric'
                      : 'ring-transparent opacity-60 hover:opacity-100'
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
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            {product.badge && (
              <span className="inline-flex self-start px-3 py-1 text-xs font-medium rounded-full bg-electric/20 text-electric-light mb-4">
                {product.badge}
              </span>
            )}
            <p className="text-electric-light text-sm uppercase tracking-wider mb-2">
              {product.category}
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
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

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-white/40 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            <p className="text-white/60 leading-relaxed mb-8">
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

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
              {[
                { icon: Truck, label: 'Free Express Shipping' },
                { icon: Shield, label: '2-Year Warranty' },
                { icon: RotateCcw, label: '30-Day Returns' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center gap-2"
                >
                  <Icon className="w-5 h-5 text-electric-light" />
                  <span className="text-xs text-white/50">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {product.specs && (
          <section className="mb-20">
            <h2 className="font-display text-2xl font-bold mb-6">
              Specifications
            </h2>
            <div className="glass rounded-2xl overflow-hidden">
              <dl className="divide-y divide-white/10">
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

        <section className="mb-20">
          <h2 className="font-display text-2xl font-bold mb-6">
            Customer Reviews
          </h2>
          <div className="space-y-4">
            {productReviews.map((review) => (
              <div key={review.id} className="glass rounded-2xl p-6">
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
          <section>
            <h2 className="font-display text-2xl font-bold mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
