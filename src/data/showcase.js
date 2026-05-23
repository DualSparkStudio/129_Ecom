import { showcaseImages } from './images';

export const showcaseItems = [
  {
    id: 'immersive-sound',
    title: 'Immersive Sound',
    tagline: 'Hear everything. Miss nothing.',
    description:
      'Our neural audio engine analyzes your environment in real time, adjusting frequency response and spatial positioning for a listening experience that feels impossibly natural.',
    image: showcaseImages['immersive-sound'],
    features: ['Spatial Audio Pro', 'Adaptive EQ', 'Neural ANC'],
    accent: 'from-electric to-blue-600',
  },
  {
    id: 'ai-workspace',
    title: 'AI Workspace',
    tagline: 'Your desk, reimagined.',
    description:
      'Intelligent peripherals that learn your workflow patterns. From posture correction to predictive lighting, every surface becomes an extension of your creative mind.',
    image: showcaseImages['ai-workspace'],
    features: ['Posture AI', 'Smart Lighting', 'Focus Mode'],
    accent: 'from-purple to-purple-soft',
  },
  {
    id: 'smart-ecosystem',
    title: 'Smart Ecosystem',
    tagline: 'One brand. Infinite connection.',
    description:
      'Every NEURON device communicates seamlessly. Switch from headphones to speaker, sync your watch data, and control your entire setup from a single intuitive app.',
    image: showcaseImages['smart-ecosystem'],
    features: ['Cross-Device Sync', 'NEURON OS', 'Cloud Profiles'],
    accent: 'from-electric-light to-purple',
  },
  {
    id: 'adaptive-tech',
    title: 'Adaptive Technology',
    tagline: 'Technology that evolves with you.',
    description:
      'Machine learning algorithms continuously refine device behavior based on your usage. Firmware updates deliver new capabilities long after purchase.',
    image: showcaseImages['adaptive-tech'],
    features: ['OTA Updates', 'Usage Learning', 'Privacy First'],
    accent: 'from-white/20 to-electric',
  },
];
