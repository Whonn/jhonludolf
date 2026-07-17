export default function Footer() {
  const toTop = () =>
    window.__lenis
      ? window.__lenis.scrollTo(0, { duration: 1.4 })
      : window.scrollTo({ top: 0, behavior: 'smooth' })
  return (
    <footer>
      <div className="container footer">
        <span>
          © {new Date().getFullYear()} Jhon Ludolf
        </span>
        <span className="footer__top magnetic" onClick={toTop} data-cursor="hover">
          Back to top ↑
        </span>
      </div>
    </footer>
  )
}
