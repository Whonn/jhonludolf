import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Batch-reveals every `.reveal` element inside the given scope on scroll.
 * Optionally staggers children of `[data-stagger]` containers.
 */
export default function useReveal(scopeRef) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
        })
      })

      gsap.utils.toArray('[data-stagger]').forEach((group) => {
        gsap.fromTo(
          group.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.08,
            scrollTrigger: {
              trigger: group,
              start: 'top 80%',
            },
          }
        )
      })
    }, scopeRef)

    return () => ctx.revert()
  }, [scopeRef])
}
