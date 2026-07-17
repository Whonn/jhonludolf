# Jhon Ludolf — Portfolio

An interactive, animation-driven portfolio for a full-stack web developer, built with **React + Vite**, **GSAP** (ScrollTrigger) and **Three.js**.

## ✨ Features

- **Three.js hero** — an interactive wireframe icosahedron + 900-point particle field that reacts to pointer movement and scroll parallax.
- **GSAP micro-animations** — animated preloader, masked line-by-line hero text reveal, scroll-triggered section reveals, and staggered content entrances.
- **Custom cursor** — a dot + easing ring that grows on interactive elements (`mix-blend-mode: difference`).
- **Magnetic buttons & links** — elements ease toward the pointer and spring back.
- **Spotlight skill cards** — a radial glow follows the cursor across each card.
- **Infinite tech marquee**, animated scroll-progress bar, and hover-reactive project rows.
- **Accessible & responsive** — respects `prefers-reduced-motion`, disables the custom cursor on touch, and collapses cleanly on mobile.

## 🚀 Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build to /dist
npm run preview  # preview the production build
```

## 🧱 Structure

```
src/
  components/
    Loader.jsx        # animated % preloader
    Cursor.jsx        # custom magnetic cursor
    Navbar.jsx        # sticky nav with scrolled state
    Hero.jsx          # headline + CTA (mounts ThreeScene)
    ThreeScene.jsx    # Three.js interactive backdrop
    Marquee.jsx       # infinite tech-stack strip
    About.jsx         # bio + animated stats
    Skills.jsx        # spotlight capability cards
    Projects.jsx      # hover-reactive work list
    Contact.jsx       # CTA + socials
    Footer.jsx
  hooks/
    useReveal.js      # GSAP ScrollTrigger reveal batching
    useMagnetic.js    # magnetic hover effect
  index.css           # design system + all styles
  App.jsx
```

## 🎨 Customizing

- **Colors / fonts** — edit the CSS variables at the top of `src/index.css`.
- **Content** — projects, skills, stats and socials are simple arrays at the top of their component files.
- **Name / email / links** — update `Hero.jsx`, `Contact.jsx`, `Navbar.jsx`, and `index.html` `<title>`/`<meta>`.

Built with React, GSAP & Three.js.
