import { Hero } from '../components/sections/Hero';
import { FeaturedProducts } from '../components/sections/FeaturedProducts';
import { ProductShowcase } from '../components/sections/ProductShowcase';
import { Collections } from '../components/sections/Collections';
import { PremiumExperience } from '../components/sections/PremiumExperience';
import { Testimonials } from '../components/sections/Testimonials';
import { Stats } from '../components/sections/Stats';
import { Newsletter } from '../components/sections/Newsletter';

export function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <ProductShowcase />
      <Collections />
      <PremiumExperience />
      <Testimonials />
      <Stats />
      <Newsletter />
    </>
  );
}
