import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Splits a heading into characters and reveals them with a staggered
 * rise + settle when the title scrolls into view.
 *
 * parts: [{ text: 'Selected ', className?: '' }, { text: 'Works', className: 'gradient-text' }]
 */
export default function SplitTitle({ as: Tag = 'h2', className = '', parts }) {
  const ref = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.st-char',
        { yPercent: 110, opacity: 0, rotate: 5 },
        {
          yPercent: 0,
          opacity: 1,
          rotate: 0,
          duration: 0.9,
          ease: 'power4.out',
          stagger: 0.022,
          scrollTrigger: { trigger: ref.current, start: 'top 85%' },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <Tag className={className} ref={ref}>
      {parts.map((part, pi) => {
        const words = part.text.split(' ').filter(Boolean)
        const lastPart = pi === parts.length - 1
        return (
          <span key={pi} className={part.className || undefined}>
            {words.map((word, wi) => (
              <span key={wi} className="st-word">
                {word.split('').map((c, ci) => (
                  <span key={ci} className="st-char">
                    {c}
                  </span>
                ))}
                {wi < words.length - 1 || !lastPart ? ' ' : ''}
              </span>
            ))}
          </span>
        )
      })}
    </Tag>
  )
}
