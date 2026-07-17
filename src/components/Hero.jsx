import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ThreeScene from './ThreeScene.jsx'
import useMagnetic from '../hooks/useMagnetic.js'

gsap.registerPlugin(ScrollTrigger)

export default function Hero({ ready }) {
  const root = useRef(null)
  useMagnetic()

  useEffect(() => {
    if (!ready) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 })
      tl.from('.hero__title .line span', {
        yPercent: 120,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.12,
      })
        .from(
          '.hero__sub',
          { y: 24, opacity: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.5'
        )
        .from(
          '.hero__portrait-wrap',
          { opacity: 0, scale: 1.06, duration: 1.4, ease: 'power3.out' },
          0.2
        )

      // exit parallax — layers separate at different speeds while scrolling away
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.to('.hero__content', {
          yPercent: -60,
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: 'bottom 35%',
            scrub: 0.4,
          },
        })
        gsap.to('.hero__portrait-wrap', {
          y: 90,
          scale: 0.95,
          ease: 'none',
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.4,
          },
        })
      }
    }, root)
    return () => ctx.revert()
  }, [ready])

  // 3D tilt on hover — portrait leans toward the cursor and springs back
 

  return (
    <section className="hero" id="top" ref={root}>
      <ThreeScene />
      <div className="container hero__inner">
        <div className="hero__grid">
          <div className="hero__content">
            <h1 className="hero__title">
              <span className="line">
                <span>
                  Full-stack <span className="gradient-text">Developer</span>
                </span>
              </span>
            </h1>
            <p className="hero__sub">building modern, fast, and pixel-perfect experiences</p>
          </div>
          <div className="hero__media">
            <div className="hero__portrait-wrap">
              <img
                className="hero__portrait"
                src="/hero-portrait.png"
                alt="Portrait of Jhon Ludolf"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
