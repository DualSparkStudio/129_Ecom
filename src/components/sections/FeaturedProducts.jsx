import { motion } from 'framer-motion';
import { products } from '../../data/products';
import { ProductCard } from '../ui/ProductCard';
import { SectionHeading } from '../ui/SectionHeading';
import { staggerContainer, viewport } from '../../hooks/useScrollReveal';

export function FeaturedProducts() {
  return (
    <section id="shop" className="section-padding section-divider relative">
      <div className="container-custom">
        <SectionHeading
          label="Curated Selection"
          title="Featured Products"
          description="Handpicked innovations that define the NEURON standard — precision engineering meets intelligent design."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7 lg:gap-8"
        >
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
