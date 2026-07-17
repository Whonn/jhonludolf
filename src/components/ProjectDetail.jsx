import { FiArrowLeft } from 'react-icons/fi'
import { getProject } from '../data/projects.js'

export default function ProjectDetail({ id }) {
  const project = getProject(id)

  if (!project) {
    return (
      <main className="detail dark-zone">
        <div className="container detail__inner">
          <a className="detail__back" href="#work">
            <FiArrowLeft /> Back to work
          </a>
          <h1 className="detail__title">Work not found</h1>
          <p className="detail__summary">
            That project doesn’t exist. Head back to the selected works.
          </p>
        </div>
      </main>
    )
  }

  return (
    <main className="detail dark-zone">
      <div className="container detail__inner">
        <a className="detail__back" href="#work" data-cursor="hover">
          <FiArrowLeft /> Back to work
        </a>

        <header className="detail__header">
          <span className="detail__badge">{project.category}</span>
          <h1 className="detail__title">{project.title}</h1>
          <p className="detail__summary">{project.summary}</p>
        </header>

        {project.image && (
          <figure className="detail__hero">
            <img src={project.image} alt={`${project.title} screenshot`} />
          </figure>
        )}

        <div className="detail__grid">
          <div className="detail__main">
            <h2 className="detail__section-title">Overview</h2>
            <p className="detail__body">{project.overview}</p>

            <h2 className="detail__section-title">Highlights</h2>
            <ul className="detail__list">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>

          <aside className="detail__meta">
            <div className="detail__meta-block">
              <span className="detail__meta-label">Role</span>
              <span className="detail__meta-value">{project.role}</span>
            </div>
            <div className="detail__meta-block">
              <span className="detail__meta-label">Year</span>
              <span className="detail__meta-value">{project.year}</span>
            </div>
            <div className="detail__meta-block">
              <span className="detail__meta-label">Stack</span>
              <div className="detail__tags">
                {project.stack.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <a className="detail__back detail__back--bottom" href="#work" data-cursor="hover">
          <FiArrowLeft /> Back to all work
        </a>
      </div>
    </main>
  )
}
