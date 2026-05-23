import { motion } from 'framer-motion';
import { products } from '../../data/products';
import { ProductCard } from '../ui/ProductCard';
import { SectionHeading } from '../ui/SectionHeading';
import { staggerContainer, viewport } from '../../hooks/useScrollReveal';

export function FeaturedProducts() {
  return (
    <section
      id="shop"
      className="relative px-5 sm:px-8 lg:px-10 pt-20 sm:pt-28 lg:pt-32 pb-0 sm:pb-20 lg:pb-32"
    >
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-7 lg:gap-8"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} staggered />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
