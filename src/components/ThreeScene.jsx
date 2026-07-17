import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * Interactive hero backdrop:
 *  - a distorted icosahedron wireframe
 *  - a field of drifting particles
 *  - both react to pointer movement and scroll
 */
export default function ThreeScene() {
  const mount = useRef(null)

  useEffect(() => {
    const el = mount.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      55,
      el.clientWidth / el.clientHeight,
      0.1,
      100
    )
    camera.position.z = 6

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(el.clientWidth, el.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    el.appendChild(renderer.domElement)

    // ---- particles ----
    const COUNT = 900
    const positions = new Float32Array(COUNT * 3)
    for (let i = 0; i < COUNT; i++) {
      const r = 6 + Math.random() * 9
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)
    }
    const pGeo = new THREE.BufferGeometry()
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const pMat = new THREE.PointsMaterial({
      color: 0x0a0a0b,
      size: 0.035,
      transparent: true,
      opacity: 0.55,
    })
    const particles = new THREE.Points(pGeo, pMat)
    scene.add(particles)

    // ---- interaction ----
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 }
    const onMove = (e) => {
      pointer.tx = (e.clientX / window.innerWidth - 0.5) * 2
      pointer.ty = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('pointermove', onMove)

    let scrollY = 0
    const onScroll = () => {
      scrollY = window.scrollY
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    const clock = new THREE.Clock()
    let raf
    const animate = () => {
      raf = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      pointer.x += (pointer.tx - pointer.x) * 0.05
      pointer.y += (pointer.ty - pointer.y) * 0.05

      if (!reduce) {
        particles.rotation.y = t * 0.02
        particles.rotation.x = t * 0.01
      }

      // gentle parallax on scroll
      const sp = scrollY * 0.0012
      particles.position.y = sp * 0.5
      camera.position.x += (pointer.x * 0.5 - camera.position.x) * 0.05
      camera.position.y += (-pointer.y * 0.5 - camera.position.y) * 0.05
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      camera.aspect = el.clientWidth / el.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(el.clientWidth, el.clientHeight)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      pGeo.dispose()
      pMat.dispose()
      if (renderer.domElement.parentNode === el) el.removeChild(renderer.domElement)
    }
  }, [])

  return <div className="hero__canvas" ref={mount} aria-hidden="true" />
}
