import RevealSection from '../components/RevealSection'
import { PROFILE } from '../data/profile'

export default function Achievements() {
  return (
    <RevealSection className="section--inner">
      <div className="container">
        <header className="section-head section-head--compact">
          <h1 className="section-head__title">Achievements</h1>
        </header>

        <div className="honors-list" role="list">
          {PROFILE.achievements.map((item) => (
            <section key={item.title} className="honors-list__item" role="listitem">
              <div className="honors-list__header">
                <h2 className="honors-list__title">{item.title}</h2>
                <span className="honors-list__year">{item.year}</span>
              </div>

              {item.detail ? (
                <p className="honors-list__detail">{item.detail}</p>
              ) : null}
            </section>
          ))}
        </div>
      </div>
    </RevealSection>
  )
}