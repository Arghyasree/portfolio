import RevealSection from '../components/RevealSection'
import { PROFILE } from '../data/profile'

export default function Achievements() {
  return (
    <RevealSection className="section--inner">
      <div className="container">
        <header className="section-head section-head--compact">
          <h1 className="section-head__title">Achievements</h1>
        </header>
        <div className="experience-list" role="list">
          {PROFILE.achievements.map((item) => (
            <section key={item.title} className="experience-row" role="listitem">
              <div className="experience-row__header">
                <h2 className="experience-row__title">{item.title}</h2>
                <span className="experience-row__year">{item.year}</span>
              </div>
              {item.detail ? (
                <p className="experience-row__detail">{item.detail}</p>
              ) : null}
            </section>
          ))}
        </div>
      </div>
    </RevealSection>
  )
}
