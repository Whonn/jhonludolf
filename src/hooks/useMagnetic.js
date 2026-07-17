import { useEffect } from 'react'
import gsap from 'gsap'

/**
 * Attaches a magnetic hover effect to every element matching `.magnetic`.
 * The element eases toward the pointer and springs back on leave.
 */
export default function useMagnetic() {
  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return
    const els = Array.from(document.querySelectorAll('.magnetic'))
    const cleanups = els.map((el) => {
      const strength = Number(el.dataset.strength || 0.4)
      const move = (e) => {
        const r = el.getBoundingClientRect()
        const x = (e.clientX - (r.left + r.width / 2)) * strength
        const y = (e.clientY - (r.top + r.height / 2)) * strength
        gsap.to(el, { x, y, duration: 0.6, ease: 'power3.out' })
      }
      const leave = () => gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.3)' })
      el.addEventListener('pointermove', move)
      el.addEventListener('pointerleave', leave)
      return () => {
        el.removeEventListener('pointermove', move)
        el.removeEventListener('pointerleave', leave)
      }
    })
    return () => cleanups.forEach((fn) => fn())
  }, [])
}
