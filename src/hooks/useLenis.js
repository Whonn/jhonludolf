import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Buttery inertia scrolling for the whole site, wired into GSAP's ticker so
 * every ScrollTrigger stays perfectly in sync. Also hijacks #anchor clicks
 * so nav links glide instead of jumping. Skipped for reduced-motion users.
 */
export default function useLenis() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true })
    window.__lenis = lenis

    lenis.on('scroll', ScrollTrigger.update)
    const raf = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    // recompute trigger positions once late-loading assets settle the layout
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    const refreshTimer = setTimeout(refresh, 1200)

    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href')
      // Ignore bare "#" and SPA route hashes like "#/work/nexus" (not selectors).
      if (id.length < 2 || id.startsWith('#/')) return
      let el = null
      try {
        el = document.querySelector(id)
      } catch {
        return
      }
      if (el) {
        e.preventDefault()
        lenis.scrollTo(el, { offset: -70, duration: 1.4 })
      }
    }
    document.addEventListener('click', onClick)

    return () => {
      document.removeEventListener('click', onClick)
      window.removeEventListener('load', refresh)
      clearTimeout(refreshTimer)
      gsap.ticker.remove(raf)
      lenis.destroy()
      delete window.__lenis
    }
  }, [])
}
