import { productImages } from './images';

const products = [
  {
    id: 'pulse-x1',
    name: 'NEURON Pulse X1',
    category: 'Audio',
    collection: 'audio',
    price: 349,
    originalPrice: 399,
    rating: 4.9,
    reviewCount: 284,
    badge: 'Bestseller',
    image:
      'https://images.unsplash.com/photo-1590658268037-6bfec64f4841?w=800&q=80&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bfec64f4841?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618366712010-f4ae9a42a6be?w=1200&q=80&auto=format&fit=crop',
    ],
    description:
      'True wireless earbuds engineered with adaptive neural noise cancellation and spatial audio tuned by AI. 42-hour total battery life with the charging case.',
    features: [
      'Adaptive Neural ANC',
      'Spatial Audio Pro',
      '42hr Total Battery',
      'IPX5 Water Resistant',
      'Multipoint Connection',
    ],
    specs: {
      driver: '11mm Titanium',
      codec: 'LDAC, AAC, aptX',
      weight: '5.2g per earbud',
      charging: 'USB-C, Wireless Qi',
    },
  },
  {
    id: 'arc-pro',
    name: 'NEURON Arc Pro',
    category: 'Audio',
    collection: 'audio',
    price: 549,
    rating: 4.8,
    reviewCount: 156,
    badge: 'New',
    image:
      'https://images.unsplash.com/photo-1546435770-3612af4ef79b?w=800&q=80&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1546435770-3612af4ef79b?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80&auto=format&fit=crop',
    ],
    description:
      'Flagship over-ear headphones with carbon fiber composite drivers and real-time room calibration. Studio-grade clarity meets everyday comfort.',
    features: [
      'Carbon Fiber Drivers',
      'Room Calibration AI',
      '40hr Battery Life',
      'Memory Foam Cushions',
      'Fold-Flat Design',
    ],
    specs: {
      driver: '50mm Carbon Composite',
      impedance: '32 Ohm',
      weight: '285g',
      connectivity: 'Bluetooth 5.3, 3.5mm',
    },
  },
  {
    id: 'desk-ai',
    name: 'NEURON Desk AI',
    category: 'Workspace',
    collection: 'workspace',
    price: 299,
    rating: 4.7,
    reviewCount: 98,
    image:
      'https://images.unsplash.com/photo-1618005182384-a83a73bd57f1?w=800&q=80&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1618005182384-a83a73bd57f1?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1527864550417-7fdcaad4c70e?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1587827751680-409dca958154?w=1200&q=80&auto=format&fit=crop',
    ],
    description:
      'Smart desk mat with integrated wireless charging, posture sensing, and ambient productivity lighting. Transforms any surface into an intelligent workspace.',
    features: [
      '15W Wireless Charging',
      'Posture AI Alerts',
      'RGB Ambient Lighting',
      'Heat-Dissipating Surface',
      'App Dashboard',
    ],
    specs: {
      size: '800 x 400mm',
      material: 'Vegan Leather + Aluminum',
      charging: 'Qi 15W + USB-C Passthrough',
      sensors: 'Pressure, Temperature',
    },
  },
  {
    id: 'flow-keyboard',
    name: 'NEURON Flow Keyboard',
    category: 'Workspace',
    collection: 'workspace',
    price: 279,
    rating: 4.9,
    reviewCount: 312,
    badge: 'Bestseller',
    image:
      'https://images.unsplash.com/photo-1587827751680-409dca958154?w=800&q=80&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1587827751680-409dca958154?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511464783649-7f54a169a2c9?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618384887929-16ec33acb9c6?w=1200&q=80&auto=format&fit=crop',
    ],
    description:
      'Low-profile mechanical keyboard with adaptive actuation and per-key RGB. AI learns your typing patterns to optimize switch response in real time.',
    features: [
      'Adaptive Actuation',
      'Per-Key RGB',
      'Aluminum Chassis',
      'Tri-Mode Connectivity',
      'Hot-Swap Switches',
    ],
    specs: {
      switches: 'NEURON Linear (45g)',
      layout: '75% Compact',
      battery: 'N/A (Wired/Wireless)',
      connectivity: 'BT, 2.4GHz, USB-C',
    },
  },
  {
    id: 'lens-ar',
    name: 'NEURON Lens',
    category: 'Mobility',
    collection: 'mobility',
    price: 899,
    originalPrice: 999,
    rating: 4.6,
    reviewCount: 67,
    badge: 'Limited',
    image:
      'https://images.unsplash.com/photo-1572635196237-14b250f06714?w=800&q=80&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1572635196237-14b250f06714?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80&auto=format&fit=crop',
    ],
    description:
      'Lightweight AR smart glasses with holographic display overlay, voice assistant, and all-day battery. The future of hands-free productivity.',
    features: [
      'Micro-OLED Display',
      'Voice AI Assistant',
      '8hr Battery Life',
      'Prescription Compatible',
      'Gesture Control',
    ],
    specs: {
      display: '1080p per eye',
      weight: '48g',
      field: '52° FOV',
      connectivity: 'Bluetooth 5.3, Wi-Fi',
    },
  },
  {
    id: 'charge-hub',
    name: 'NEURON Charge Hub',
    category: 'Accessories',
    collection: 'accessories',
    price: 189,
    rating: 4.8,
    reviewCount: 201,
    image:
      'https://images.unsplash.com/photo-1591293119768-2d49b06c7486?w=800&q=80&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1591293119768-2d49b06c7486?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1625948515291-69613efd103c?w=1200&q=80&auto=format&fit=crop',
    ],
    description:
      'Triple-device charging station with intelligent power distribution. Charges phone, earbuds, and watch simultaneously at maximum safe speed.',
    features: [
      '3-Device Simultaneous',
      'Smart Power AI',
      'MagSafe Compatible',
      'Aluminum Build',
      'Cable Management',
    ],
    specs: {
      output: '65W Total',
      ports: '2x Qi, 1x MagSafe',
      material: 'CNC Aluminum',
      dimensions: '120 x 80 x 25mm',
    },
  },
  {
    id: 'orbit-watch',
    name: 'NEURON Orbit Watch',
    category: 'Mobility',
    collection: 'mobility',
    price: 449,
    rating: 4.9,
    reviewCount: 445,
    badge: 'Bestseller',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544117764-5bc1e9b6d4e4?w=1200&q=80&auto=format&fit=crop',
    ],
    description:
      'Premium smartwatch with titanium case, sapphire crystal, and health AI that predicts recovery needs. 14-day battery in standard mode.',
    features: [
      'Titanium Case',
      'Sapphire Crystal',
      'Health AI Insights',
      '14-Day Battery',
      'GPS + LTE Option',
    ],
    specs: {
      display: '1.9" AMOLED Always-On',
      case: 'Grade 5 Titanium',
      water: '100m WR',
      sensors: 'HR, SpO2, ECG, Temp',
    },
  },
  {
    id: 'sphere-speaker',
    name: 'NEURON Sphere',
    category: 'Audio',
    collection: 'audio',
    price: 399,
    rating: 4.7,
    reviewCount: 128,
    image:
      'https://images.unsplash.com/photo-1608043152359-507f8c70ac0b?w=800&q=80&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1608043152359-507f8c70ac0b?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545454675-3531b543be6d?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558085019-9d3587b4f1e5?w=1200&q=80&auto=format&fit=crop',
    ],
    description:
      '360° smart speaker with room-filling sound and built-in voice assistant. Pairs seamlessly with your entire NEURON ecosystem.',
    features: [
      '360° Spatial Sound',
      'Voice Assistant Built-in',
      'Multi-Room Sync',
      'AirPlay 2 & Spotify',
      'Ambient Light Ring',
    ],
    specs: {
      drivers: '4x Full-Range + Sub',
      power: '60W RMS',
      connectivity: 'Wi-Fi, BT 5.3, Aux',
      dimensions: '180mm Sphere',
    },
  },
  {
    id: 'glide-mouse',
    name: 'NEURON Glide',
    category: 'Workspace',
    collection: 'workspace',
    price: 149,
    rating: 4.8,
    reviewCount: 189,
    image:
      'https://images.unsplash.com/photo-1527864550417-7fdcaad4c70e?w=800&q=80&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1527864550417-7fdcaad4c70e?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1615663244697-4b8a3c99e7b5?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618384887929-16ec33acb9c6?w=1200&q=80&auto=format&fit=crop',
    ],
    description:
      'Ultra-lightweight precision mouse with 26K DPI sensor and haptic feedback triggers. Designed for creators who demand zero compromise.',
    features: [
      '26K DPI Sensor',
      'Haptic Feedback',
      '69g Ultra-Light',
      'Magnetic Side Buttons',
      '8 Programmable Buttons',
    ],
    specs: {
      sensor: 'NEURON Focus Pro',
      dpi: '100–26,000',
      polling: '8000Hz',
      battery: '80hr Wireless',
    },
  },
  {
    id: 'vault-backpack',
    name: 'NEURON Vault',
    category: 'Accessories',
    collection: 'accessories',
    price: 229,
    rating: 4.9,
    reviewCount: 276,
    badge: 'New',
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6861?w=800&q=80&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6861?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c6?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581604772883-7aa9031a4fbf?w=1200&q=80&auto=format&fit=crop',
    ],
    description:
      'Weatherproof tech backpack with dedicated device compartments, anti-theft zippers, and integrated USB-C charging port.',
    features: [
      'Weatherproof Shell',
      'Laptop + Tablet Slots',
      'Anti-Theft Zippers',
      'USB-C Charging Port',
      'Ergonomic Straps',
    ],
    specs: {
      capacity: '28L',
      laptop: 'Up to 16"',
      material: 'Ballistic Nylon',
      weight: '1.1kg',
    },
  },
];

products.forEach((p) => {
  const imgs = productImages[p.id];
  if (imgs) {
    p.image = imgs.main;
    p.images = imgs.gallery;
  }
});

export { products };

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(productId, limit = 4) {
  const product = getProductById(productId);
  if (!product) return products.slice(0, limit);
  return products
    .filter((p) => p.id !== productId && p.collection === product.collection)
    .slice(0, limit);
}
