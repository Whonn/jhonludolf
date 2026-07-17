import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import Loader from './components/Loader.jsx'
import useLenis from './hooks/useLenis.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ProjectDetail from './components/ProjectDetail.jsx'

function parseWorkId(hash) {
  const match = hash.match(/^#\/work\/([\w-]+)/)
  return match ? match[1] : null
}

export default function App() {
  // Skip the intro loader if the visitor lands straight on a detail page, so
  // returning to the home page doesn't replay it.
  const [ready, setReady] = useState(() => !!parseWorkId(window.location.hash))
  const [workId, setWorkId] = useState(() => parseWorkId(window.location.hash))
  // Remembers where the visitor was on the home page before opening a detail,
  // so "Back to work" returns them to the same spot (the grid).
  const homeScrollRef = useRef(0)
  useLenis()

  useEffect(() => {
    const onHashChange = () => setWorkId(parseWorkId(window.location.hash))
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  // While on the home page, keep track of the scroll position.
  useEffect(() => {
    if (workId) return
    const onScroll = () => {
      homeScrollRef.current = window.scrollY
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [workId])

  // Position the window on every route change: detail pages start at the top;
  // returning home restores the previous position (falling back to the work
  // section for direct deep-links). Runs in the commit phase (no rAF), so it is
  // reliable even when the tab is backgrounded.
  useLayoutEffect(() => {
    const applyScroll = (y) => {
      window.scrollTo(0, y)
      const lenis = window.__lenis
      if (lenis) {
        lenis.resize?.()
        lenis.scrollTo(y, { immediate: true })
      }
    }

    let target = 0
    if (!workId) {
      const saved = homeScrollRef.current
      if (saved > 0) {
        target = saved
      } else if (window.location.hash === '#work') {
        const el = document.querySelector('#work')
        target = el ? el.getBoundingClientRect().top + window.scrollY - 70 : 0
      }
    }

    applyScroll(target)
    // Re-assert once the layout / Lenis dimensions settle.
    const raf = requestAnimationFrame(() => applyScroll(target))
    return () => cancelAnimationFrame(raf)
  }, [workId])

  useEffect(() => {
    const bar = document.getElementById('scroll-progress')
    const onScroll = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      const p = max > 0 ? h.scrollTop / max : 0
      if (bar) bar.style.transform = `scaleX(${p})`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (workId) {
    return (
      <>
        <div className="scroll-progress" id="scroll-progress" />
        <Navbar />
        <ProjectDetail id={workId} />
      </>
    )
  }

  return (
    <>
      <Loader onComplete={() => setReady(true)} />
      <div className="scroll-progress" id="scroll-progress" />
      <Navbar />
      <main className={ready ? 'app app--ready' : 'app'}>
        <Hero ready={ready} />
        <div className="dark-zone">
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  )
}
