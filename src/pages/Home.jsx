import profileImage from '../assets/profile.jpg'
import { PROFILE } from '../data/profile'

export default function Home() {
  const [bioLead] = PROFILE.homeBio

  return (
    <section className="hero section">
      <div className="container hero__layout">
        <div className="hero__portrait">
          <img
            src={profileImage}
            alt={`Portrait of ${PROFILE.name}`}
            className="hero__photo"
            width={200}
            height={200}
          />
        </div>

        <div className="hero__content">
          <h1 className="hero__title">{PROFILE.name}</h1>
          <p className="hero__role hero__role--cursive">{PROFILE.role}</p>
          <div className="hero__prose">
            <p className="hero__bio">
              {bioLead.beforeInstitution}
              <a
                href={bioLead.institution.href}
                target="_blank"
                rel="noreferrer"
              >
                {bioLead.institution.name}
              </a>
              {bioLead.beforeAdvisor}
              <a
                href={bioLead.advisor.href}
                target="_blank"
                rel="noreferrer"
              >
                {bioLead.advisor.name}
              </a>
              {bioLead.afterAdvisor}
            </p>
            <p className="hero__bio">{PROFILE.homeBio[1]}</p>
          </div>
          <ul className="hero__profile-links" aria-label="Profile links">
            {PROFILE.profileLinks.map(({ label, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  className="hero__profile-link"
                  {...(external
                    ? { target: '_blank', rel: 'noreferrer' }
                    : {})}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
