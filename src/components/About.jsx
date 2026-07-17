import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { LuMapPin, LuLayers, LuGraduationCap, LuGlobe } from 'react-icons/lu'
import useReveal from '../hooks/useReveal.js'

gsap.registerPlugin(ScrollTrigger)

const STATS = [
  { num: '4+', label: 'Years building for the web' },
  { num: '6+', label: 'Projects completed' },
]

const INFO = [
  { icon: LuMapPin, label: 'Based in', value: 'Remote · Philippines' },
  { icon: LuLayers, label: 'Role', value: 'Full-Stack Web Developer' },
  { icon: LuGraduationCap, label: 'Education', value: 'Information Technology' },
  { icon: LuGlobe, label: 'Languages', value: 'English · Filipino ' },
]

const LEAD_A = "Hi, I'm Jhon Ludolf —"
const LEAD_B =
  'a full-stack web developer focused on building modern, fast, user-centered experiences.'

const words = (text) =>
  text.split(' ').map((w, i) => (
    <span className="lead-word" key={i}>
      {w}{' '}
    </span>
  ))

export default function About() {
  const root = useRef(null)
  const leadRef = useRef(null)
  useReveal(root)

  // word-by-word "reading" reveal, scrubbed to scroll position
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const els = leadRef.current.querySelectorAll('.lead-word')
    const tween = gsap.fromTo(
      els,
      { opacity: 0.14 },
      {
        opacity: 1,
        stagger: 0.06,
        ease: 'none',
        scrollTrigger: {
          trigger: leadRef.current,
          start: 'top 85%',
          end: 'top 35%',
          scrub: 0.5,
        },
      }
    )
    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [])

  return (
    <div ref={root}>
      <section id="about">
        <div className="container">
          <div className="about__cards" data-stagger>
            {INFO.map(({ icon: Icon, label, value }) => (
              <div className="info-card" key={label} data-cursor="hover">
                <span className="info-card__icon">
                  <Icon />
                </span>
                <span className="info-card__label">{label}</span>
                <span className="info-card__value">{value}</span>
              </div>
            ))}
          </div>

          <div className="about__grid">
            <div>
              <p className="about__lead" ref={leadRef}>
                {words(LEAD_A)}
                <span className="dim">{words(LEAD_B)}</span>
              </p>
              <p className="about__body reveal">
                I approach development as a balance between structure and
                creativity, writing clean, well-organized code with strong
                attention to detail. I'm always exploring new tools and ideas,
                using each project as an opportunity to grow and create work that
                is both meaningful and enjoyable.
              </p>
            </div>
            <div className="about__stats" data-stagger>
              {STATS.map((s) => (
                <div className="stat" key={s.label}>
                  <div className="stat__num gradient-text">{s.num}</div>
                  <div className="stat__label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
