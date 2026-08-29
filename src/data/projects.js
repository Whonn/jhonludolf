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
    id: 'volt',
    title: 'VOLT Athletic Club',
    category: 'Fitness & Wellness',
    badge: 'Gym Site',
    image: '/volt-preview.png',
    url: 'https://volt-ruby-five.vercel.app',
    repo: null,
    year: '2026',
    role: 'Design & Front-End Development',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    summary:
      'A high-contrast landing page for a coached strength & conditioning gym — built to turn a scroll into a booked free week.',
    overview:
      'VOLT Athletic Club is a marketing site for a strength and conditioning gym that sells coaching, not equipment. The design leans on heavy condensed display type, a near-black palette, and a noise-textured surface to make the brand feel physical. Every section funnels toward one action: claiming a free first week.',
    highlights: [
      'Six program lanes laid out as a scannable grid, each with its own code, focus, and session length.',
      'Scroll-triggered stat counters and a looping marquee that surface social proof without a testimonial wall.',
      'Member results presented as hard numbers — load added, body fat lost, sessions kept — paired with short quotes.',
      'Three-tier membership pricing with a highlighted default, closing on a no-card-required free week.',
    ],
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
  },
  {
    id: 'anchorpoint',
    title: 'AnchorPoint',
    category: 'Maritime Operations',
    badge: 'Web App',
    image: '/anchorpoint-preview.png',
    url: null,
    repo: 'https://github.com/Whonn/Anchorpoint',
    year: '2026',
    role: 'Full-Stack Development',
    tags: ['React', 'Flask', 'Python'],
    summary:
      'A maritime management web app that pulls scheduling, payroll, reporting, and weather into a single operations dashboard.',
    overview:
      'AnchorPoint is an internal tool for a port and shipping operator, built as a React front end against a Flask REST API. The app opens on a dark maritime landing page and drops into a sidebar-driven workspace where crew scheduling, payroll, and shipment reporting all live in one place instead of across separate spreadsheets.',
    highlights: [
      'Sidebar workspace covering Home, Scheduling, Reports, Payroll, and Weather from a single dashboard.',
      'Interactive scheduling calendar with month navigation and date selection.',
      'Recharts analytics over shipment and operations data, with Excel import and export handled server-side by openpyxl.',
      'Gemini AI integration that summarizes operational data and surfaces performance trends.',
    ],
    stack: ['React', 'Flask', 'Python', 'Firebase', 'Recharts', 'Axios'],
  },
]

export function getProject(id) {
  return PROJECTS.find((p) => p.id === id)
}
