import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const slide = gsap.quickTo(navRef.current, 'yPercent', {
      duration: 0.5,
      ease: 'power3.out',
    })
    let lastY = window.scrollY

    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      if (!reduce) {
        // hide when scrolling down past the hero top, reveal on any scroll up
        const goingDown = y > lastY && y > 140
        slide(goingDown ? -120 : 0)
      }
      lastY = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={scrolled ? 'navbar navbar--scrolled' : 'navbar'} ref={navRef}>
      <a href="#top" className="navbar__logo" aria-label="Jhon Ludolf — home">
        <img className="navbar__mark" src="/logo.png" alt="Jhon Ludolf logo" />
      </a>
      <div className="navbar__links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#work">Work</a>
        <a href="#contact" className="navbar__cta magnetic">
          Let's talk
        </a>
      </div>
    </nav>
  )
}
