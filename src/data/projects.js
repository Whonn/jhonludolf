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
]

export function getProject(id) {
  return PROJECTS.find((p) => p.id === id)
}
