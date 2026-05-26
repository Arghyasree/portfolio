import RevealSection from '../components/RevealSection'
import { PROFILE } from '../data/profile'

export default function Achievements() {
  return (
    <RevealSection className="section--inner">
      <div className="container">
        <header className="section-head section-head--compact">
          <h1 className="section-head__title">Achievements</h1>
        </header>
        <ul className="honors-list">
          {PROFILE.achievements.map((item) => (
            <li key={item.title} className="honors-list__item">
              <div className="honors-list__content">
                <div className="honors-list__header">
                  <p className="honors-list__title">{item.title}</p>
                  <span
                    className="honors-list__year"
                    aria-label={`Year ${item.year}`}
                  >
                    {item.year}
                  </span>
                </div>
                {item.detail ? (
                  <p className="honors-list__detail">{item.detail}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </RevealSection>
  )
}
