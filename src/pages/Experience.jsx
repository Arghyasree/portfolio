import RevealSection from '../components/RevealSection'
import { PROFILE } from '../data/profile'

export default function Experience() {
  return (
    <RevealSection className="section--inner">
      <div className="container">
        <header className="section-head section-head--compact">
          <h1 className="section-head__title">Experience</h1>
        </header>
        <div className="experience-list" role="list">
          {PROFILE.experience.map((entry) => (
            <section key={entry.title} className="experience-row" role="listitem">
              <div className="experience-row__header">
                <h2 className="experience-row__title">{entry.title}</h2>
                <span className="experience-row__year">{entry.year}</span>
              </div>
              <p className="experience-row__detail">{entry.detail}</p>
            </section>
          ))}
        </div>
      </div>
    </RevealSection>
  )
}
