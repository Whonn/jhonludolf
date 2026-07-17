import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiGit,
  SiPostgresql,
  SiMongodb,
  SiGreensock,
  SiThreedotjs,
} from 'react-icons/si'
import SplitTitle from './SplitTitle.jsx'

gsap.registerPlugin(ScrollTrigger)

const SKILLS = [
  { icon: SiNextdotjs, label: 'Next.js' },
  { icon: SiReact, label: 'React' },
  { icon: SiTypescript, label: 'TypeScript' },
  { icon: SiTailwindcss, label: 'Tailwind CSS' },
  { icon: SiExpress, label: 'Express' },
  { icon: SiGit, label: 'Git' },
  { icon: SiPostgresql, label: 'PostgreSQL' },
  { icon: SiMongodb, label: 'MongoDB' },
  { icon: SiGreensock, label: 'GSAP' },
  { icon: SiThreedotjs, label: 'Three.js' },
]

export default function Skills() {
  const root = useRef(null)

  // springy pop-in: tiles scale up with a little random tilt, then settle
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.skill-tile',
        {
          opacity: 0,
          y: 36,
          scale: 0.8,
          rotation: () => gsap.utils.random(-8, 8),
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 0.7,
          ease: 'back.out(1.7)',
          stagger: 0.05,
          scrollTrigger: { trigger: '.skills__grid', start: 'top 82%' },
        }
      )
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section id="skills" ref={root}>
      <div className="container">
        <SplitTitle
          className="section-title skills__heading"
          parts={[{ text: 'Featured Skills' }]}
        />
        <div className="skills__grid">
          {SKILLS.map(({ icon: Icon, label }) => (
            <div className="skill-tile" key={label} data-cursor="hover">
              <span className="skill-tile__icon">
                <Icon />
              </span>
              <span className="skill-tile__label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
