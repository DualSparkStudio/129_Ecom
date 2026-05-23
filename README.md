# NEURON — Premium Futuristic eCommerce Demo

A production-level, portfolio-ready eCommerce showcase built with React, Vite, Tailwind CSS, and Framer Motion. Designed for high-ticket client presentations with Awwwards-style UI/UX.

## Features

- Cinematic hero with floating product visuals
- 10 premium products with full product detail pages
- Animated slide-in cart with quantity management
- Horizontal immersive product showcase
- Collection cards, testimonials, stats, newsletter
- Glassmorphism, gradients, and smooth Framer Motion animations
- Fully responsive (mobile, tablet, desktop)
- Dark futuristic aesthetic with electric blue accents

## Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- **Framer Motion**
- **Lucide React** icons
- **React Router DOM**

## Quick Start

### Prerequisites

- Node.js 18+ (20 LTS recommended)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer, CartPanel, Layout
│   ├── sections/     # Hero, Products, Showcase, etc.
│   └── ui/           # Button, ProductCard, SectionHeading
├── context/          # Cart state management
├── data/             # Products, collections, testimonials
├── hooks/            # Animation variants
├── pages/            # Home, ProductPage
└── utils/            # cn, formatPrice
```

## Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Home with all sections |
| `/product/:id` | Product detail page |

## Product IDs

- `pulse-x1`, `arc-pro`, `desk-ai`, `flow-keyboard`, `lens-ar`
- `charge-hub`, `orbit-watch`, `sphere-speaker`, `glide-mouse`, `vault-backpack`

## Images

Product, collection, showcase, and avatar images are **bundled locally** in `public/images/` (sourced from Unsplash during setup). They work offline with no external CDN dependency.

## License

Demo project for portfolio presentation.
