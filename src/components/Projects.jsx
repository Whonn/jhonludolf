import { useRef } from 'react'
import useReveal from '../hooks/useReveal.js'
import SplitTitle from './SplitTitle.jsx'
import { PROJECTS } from '../data/projects.js'

function WorkCard({ p }) {
  return (
    <a className="work-card" href={`#/work/${p.id}`} data-cursor="hover">
      <div className="work-card__preview">
        {p.image ? (
          <img src={p.image} alt={`${p.title} preview`} loading="lazy" />
        ) : (
          <div className="work-card__placeholder">
            <span className="work-card__placeholder-badge">{p.badge}</span>
            <span className="work-card__placeholder-title">{p.title}</span>
          </div>
        )}
      </div>
      <div className="work-card__body">
        <div className="work-card__text">
          <h3 className="work-card__title">{p.title}</h3>
          <span className="work-card__category">{p.category}</span>
        </div>
        <span className="work-card__arrow" aria-hidden="true">
          →
        </span>
      </div>
    </a>
  )
}

export default function Projects() {
  const root = useRef(null)
  useReveal(root)

  return (
    <section id="work" ref={root}>
      <div className="container">
        <SplitTitle
          className="section-title"
          parts={[
            { text: 'Selected ' },
            { text: 'Works', className: 'gradient-text' },
          ]}
        />
        <div className="work-grid" data-stagger>
          {PROJECTS.map((p) => (
            <WorkCard p={p} key={p.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
