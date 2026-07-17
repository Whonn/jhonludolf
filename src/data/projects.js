// Shared source of truth for the Selected Works grid and the detail pages.
export const PROJECTS = [
  {
    id: 'nexus',
    title: 'NEXUS Web Agency',
    category: 'Web Design & Development',
    badge: 'Agency Site',
    image: '/nexus-preview.png',
    url: 'https://nexus-web-agency-self.vercel.app',
    repo: 'https://github.com/Nexus-Creatives/nexus-web-agency',
    year: '2026',
    role: 'Design & Full-Stack Development',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP'],
    summary:
      'A conversion-focused agency site for a custom web studio — high-speed, AI-driven builds engineered with behavioral psychology to turn visitors into clients.',
    overview:
      'NEXUS is the marketing site for a custom web design studio. The goal was to make a small agency feel premium and credible from the first scroll — pairing bold display type with smooth, purposeful motion. Every section is built to move a visitor toward a single action: booking a build.',
    highlights: [
      'Bold, animated hero with a live "system status" panel to signal performance and credibility.',
      'GSAP-driven scroll interactions and a before/after slider comparing template sites with custom builds.',
      'Fully responsive, SEO-optimized, and deployed on Vercel with sub-second load targets.',
      'Contact flow wired to Resend for reliable transactional email.',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Resend', 'Lucide', 'Vercel'],
  },
  {
    id: 'atlas',
    title: 'Atlas Commerce',
    category: 'E-Commerce',
    badge: 'Storefront',
    image: null,
    url: 'https://atlas-commerce.vercel.app',
    repo: null,
    year: '2025',
    role: 'Front-End Development',
    tags: ['React', 'GraphQL', 'Stripe'],
    summary:
      'A headless storefront with sub-second navigation, Stripe checkout, and a fully digital cart-to-purchase flow.',
    overview:
      'Atlas Commerce is a headless storefront concept focused on speed and a frictionless checkout. Product data is served over GraphQL, with an optimistic cart and a Stripe-powered checkout designed to minimize drop-off.',
    highlights: [
      'Instant, client-side navigation between catalog and product pages.',
      'Optimistic cart updates with server reconciliation.',
      'Stripe checkout with a streamlined, mobile-first flow.',
    ],
    stack: ['React', 'GraphQL', 'Stripe', 'Vite'],
  },
  {
    id: 'orbit',
    title: 'Orbit Studio',
    category: 'Agency / Portfolio',
    badge: 'WebGL Site',
    image: null,
    url: 'https://orbit-studio.vercel.app',
    repo: null,
    year: '2025',
    role: 'Creative Development',
    tags: ['Three.js', 'GSAP', 'Vite'],
    summary:
      'An award-style agency site with a WebGL hero, scroll storytelling, and buttery GSAP-driven transitions.',
    overview:
      'Orbit Studio is an experimental agency site built to feel like an interactive showreel. A WebGL hero sets the tone, and scroll-linked storytelling carries the visitor through the studio’s work.',
    highlights: [
      'Custom WebGL hero rendered with Three.js.',
      'Scroll-driven narrative with pinned sections and parallax.',
      'GSAP timelines for coordinated, performant transitions.',
    ],
    stack: ['Three.js', 'GSAP', 'Vite', 'JavaScript'],
  },
  {
    id: 'pulse',
    title: 'Pulse Health',
    category: 'Healthcare',
    badge: 'Patient Portal',
    image: null,
    url: 'https://pulse-health.vercel.app',
    repo: null,
    year: '2024',
    role: 'Full-Stack Development',
    tags: ['Node.js', 'Prisma', 'AWS'],
    summary:
      'A HIPAA-minded patient portal with secure messaging, online scheduling, and a streamlined new-patient flow.',
    overview:
      'Pulse Health is a patient portal concept built around trust and clarity. It centers on secure messaging and self-serve scheduling, reducing phone volume while keeping sensitive data handling front-of-mind.',
    highlights: [
      'Secure patient–provider messaging.',
      'Self-serve appointment scheduling with reminders.',
      'Streamlined digital intake for new patients.',
    ],
    stack: ['Node.js', 'Prisma', 'PostgreSQL', 'AWS'],
  },
]

export function getProject(id) {
  return PROJECTS.find((p) => p.id === id)
}
