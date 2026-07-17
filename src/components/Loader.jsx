import { useEffect, useRef } from 'react'
import gsap from 'gsap'

// Persists across SPA navigations (module scope isn't reset by React re-mounts),
// so the intro only ever plays on the first page load.
let introPlayed = false

export default function Loader({ onComplete }) {
  const root = useRef(null)
  const bar = useRef(null)

  useEffect(() => {
    // On any mount after the first (e.g. returning from a detail page), skip the
    // animation entirely and reveal the site immediately.
    if (introPlayed) {
      if (root.current) root.current.style.display = 'none'
      onComplete?.()
      return
    }

    const tl = gsap.timeline()

    tl.to(bar.current, { width: '100%', duration: 2, ease: 'power2.inOut' })
      .to(root.current, {
        yPercent: -100,
        duration: 0.9,
        ease: 'power4.inOut',
        delay: 0.2,
        onStart: () => onComplete?.(),
        onComplete: () => {
          introPlayed = true
          if (root.current) root.current.style.display = 'none'
        },
      })

    return () => tl.kill()
  }, [onComplete])

  return (
    <div className="loader" ref={root}>
      <div className="loader__bar">
        <span ref={bar} />
      </div>
    </div>
  )
}
