import { useRef } from 'react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaXTwitter } from 'react-icons/fa6'
import useReveal from '../hooks/useReveal.js'
import useMagnetic from '../hooks/useMagnetic.js'
import SplitTitle from './SplitTitle.jsx'

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com', icon: FiGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: FiLinkedin },
  { label: 'X / Twitter', href: 'https://x.com', icon: FaXTwitter },
  { label: 'Portfolio', href: '#', img: '/logo.png' },
]

export default function Contact() {
  const root = useRef(null)
  useReveal(root)
  useMagnetic()

  return (
    <section id="contact" className="contact" ref={root}>
      <div className="container">
        <SplitTitle
          className="contact__title"
          parts={[
            { text: "Let's build " },
            { text: 'something great.', className: 'gradient-text' },
          ]}
        />
        <p className="reveal" style={{ color: 'var(--text-dim)', marginBottom: '2rem' }}>
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
        <a
          className="contact__mail reveal"
          href="mailto:jhonludolfmagboo@gmail.com"
        >
          jhonludolfmagboo@gmail.com
        </a>
        <div className="contact__socials reveal">
          {SOCIALS.map(({ label, href, icon: Icon, img }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              title={label}
              className="magnetic"
              data-strength="0.3"
            >
              {img ? (
                <img className="contact__social-logo" src={img} alt={label} />
              ) : (
                <Icon />
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
