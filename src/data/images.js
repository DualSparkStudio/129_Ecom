/** Local bundled images — served from /public/images (works offline, no CDN 404s) */
const base = (path) => `/images/${path}`;

export const productImages = {
  'pulse-x1': {
    main: base('products/pulse-x1.jpg'),
    gallery: [
      base('products/pulse-x1.jpg'),
      base('products/arc-pro.jpg'),
      base('products/sphere-speaker.jpg'),
    ],
  },
  'arc-pro': {
    main: base('products/arc-pro.jpg'),
    gallery: [
      base('products/arc-pro.jpg'),
      base('products/sphere-speaker.jpg'),
      base('products/pulse-x1.jpg'),
    ],
  },
  'desk-ai': {
    main: base('products/desk-ai.jpg'),
    gallery: [
      base('products/desk-ai.jpg'),
      base('products/flow-keyboard.jpg'),
      base('products/glide-mouse.jpg'),
    ],
  },
  'flow-keyboard': {
    main: base('products/flow-keyboard.jpg'),
    gallery: [
      base('products/flow-keyboard.jpg'),
      base('products/glide-mouse.jpg'),
      base('products/desk-ai.jpg'),
    ],
  },
  'lens-ar': {
    main: base('products/lens-ar.jpg'),
    gallery: [
      base('products/lens-ar.jpg'),
      base('products/orbit-watch.jpg'),
      base('products/lens-ar.jpg'),
    ],
  },
  'charge-hub': {
    main: base('products/charge-hub.jpg'),
    gallery: [
      base('products/charge-hub.jpg'),
      base('products/orbit-watch.jpg'),
      base('products/pulse-x1.jpg'),
    ],
  },
  'orbit-watch': {
    main: base('products/orbit-watch.jpg'),
    gallery: [
      base('products/orbit-watch.jpg'),
      base('products/lens-ar.jpg'),
      base('products/charge-hub.jpg'),
    ],
  },
  'sphere-speaker': {
    main: base('products/sphere-speaker.jpg'),
    gallery: [
      base('products/sphere-speaker.jpg'),
      base('products/arc-pro.jpg'),
      base('products/pulse-x1.jpg'),
    ],
  },
  'glide-mouse': {
    main: base('products/glide-mouse.jpg'),
    gallery: [
      base('products/glide-mouse.jpg'),
      base('products/flow-keyboard.jpg'),
      base('products/desk-ai.jpg'),
    ],
  },
  'vault-backpack': {
    main: base('products/vault-backpack.jpg'),
    gallery: [
      base('products/vault-backpack.jpg'),
      base('products/charge-hub.jpg'),
      base('products/desk-ai.jpg'),
    ],
  },
};

export const collectionImages = {
  audio: base('collections/audio.jpg'),
  workspace: base('collections/workspace.jpg'),
  mobility: base('collections/mobility.jpg'),
  accessories: base('collections/accessories.jpg'),
};

export const showcaseImages = {
  'immersive-sound': base('showcase/sound.jpg'),
  'ai-workspace': base('showcase/workspace.jpg'),
  'smart-ecosystem': base('showcase/ecosystem.jpg'),
  'adaptive-tech': base('showcase/adaptive.jpg'),
};

export const avatarImages = [
  base('avatars/1.jpg'),
  base('avatars/2.jpg'),
  base('avatars/3.jpg'),
  base('avatars/4.jpg'),
  base('avatars/5.jpg'),
  base('avatars/6.jpg'),
];
