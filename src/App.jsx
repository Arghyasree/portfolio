import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

/** Edit this object to personalize your portfolio */
const PROFILE = {
  name: 'Arghyasree Saha',
  role: 'PhD Student | AI Researcher | Bioinformatics',
  tagline: (
    <>
      Hi, I am a PhD student at the Computer Vision and Pattern Recognition Unit, Indian Statistical Institute, Kolkata
      advised by{' '}
      <a
        href="https://oldweb.isical.ac.in/~utpal/"
        target="_blank"
        rel="noreferrer"
      >
        Prof. Utpal Garain
      </a>
      . My current research focuses on Deep Learning and Bioinformatics.
    </>
  ),
  email: 'arghyasree.saha_r@isical.ac.in',
  location: 'Kolkata, India',
  social: [
    { label: 'Scholar', href: 'https://scholar.google.com/citations?user=kJsemWIAAAAJ&hl=en' },
    { label: 'GitHub', href: 'https://github.com/Arghyasree' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/arghyasree-saha-82b07422b/' },
  ],
  publications: [
    {
      title: 'DeepPark-Net: A Multimodal Deep Learning Framework for Parkinson’s Disease Detection',
      venue: 'International Conference on Computational Intelligence in Communications and Business Analytics',
      href: 'https://link.springer.com/chapter/10.1007/978-3-032-17181-8_26',
    },
    {
      title: 'Schizophrenia detection from electroencephalogram signals using image encoding and wrapper-based deep feature selection approach',
      venue: 'Scientific Reports',
      href: 'https://www.nature.com/articles/s41598-025-06121-7',
    },
  ],
  education: [
    {
      degree: 'PhD Student in Computer Science',
      school: 'Indian Statistical Institute, Kolkata',
      years: '2025 — Present',
      detail: 'Research in Deep Learning and Bioinformatics.',
    },
    {
      degree: 'M.E. in Software Engineering, Department of Information Technology',
      school: 'Jadavpur University',
      years: '2023 — 2025',
      detail: 'Thesis - A Multimodal Approach to Schizophrenia Detection and Classification.',
    },
    {
      degree: 'B.Tech in Computer Science and Engineering',
      school: 'Maulana Abul Kalam Azad University of Technology, West Bengal (formerly WBUT)',
      years: '2019 — 2023',
    },
  ],
  achievements: [
    { title: 'UGC NET-JRF (99.96 Percentile)', year: '2025' },
    { title: 'University Gold Medalist for securing First Class First Position in Master of Engineering at Jadavpur University', year: '2025' },
  ],
}

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'publications', label: 'Publications' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return ref
}

function RevealSection({ id, className = '', children }) {
  const sectionRef = useReveal()
  return (
    <section
      ref={sectionRef}
      id={id}
      className={`section reveal ${className}`.trim()}
    >
      {children}
    </section>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  const scrollToId = useCallback((hash) => {
    const el = document.getElementById(hash)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    closeMenu()
  }, [closeMenu])

  return (
    <div className="site">
      <div className="site-bg" aria-hidden="true" />

      <header className={`nav-wrap ${scrolled ? 'nav-wrap--scrolled' : ''}`}>
        <nav className="nav site-nav" aria-label="Primary">
          <a
            href="#about"
            className="nav__brand"
            onClick={(e) => {
              e.preventDefault()
              scrollToId('about')
            }}
          >
            <span className="nav__brand-mark" aria-hidden="true" />
            <span className="nav__brand-text">{PROFILE.name}</span>
          </a>

          <button
            type="button"
            className="nav__toggle"
            aria-expanded={menuOpen}
            aria-controls="nav-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="nav__toggle-bar" />
            <span className="nav__toggle-bar" />
            <span className="nav__toggle-bar" />
            <span className="visually-hidden">Menu</span>
          </button>

          <ul
            id="nav-menu"
            className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}
          >
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="nav__link"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToId(id)
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section id="about" className="hero section">
          <div className="container hero__inner">
            <h1 className="hero__title">{PROFILE.name}</h1>
            <p className="hero__role">{PROFILE.role}</p>
            <div className="hero__tagline">{PROFILE.tagline}</div>
            <p className="hero__links" aria-label="Quick links">
              <a
                href="#publications"
                className="hero__link"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToId('publications')
                }}
              >
                Publications
              </a>
              <span className="hero__links-sep" aria-hidden="true">
                ·
              </span>
              <a
                href="#contact"
                className="hero__link"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToId('contact')
                }}
              >
                Contact
              </a>
            </p>
          </div>
        </section>

        <RevealSection id="publications">
          <div className="container">
            <header className="section-head">
              <h2 className="section-head__title">Publications</h2>
              <p className="section-head__desc">
                Peer-reviewed journals and conference publications.
              </p>
            </header>
            <ol className="pub-list">
              {PROFILE.publications.map((pub) => (
                <li key={pub.title} className="pub-item surface-card">
                  <a
                    href={pub.href}
                    className="pub-item__title"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {pub.title}
                  </a>
                  <p className="pub-item__venue">{pub.venue}</p>
                  <a
                    href={pub.href}
                    className="pub-item__link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View article
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </RevealSection>

        <RevealSection id="education">
          <div className="container">
            <header className="section-head">
              <h2 className="section-head__title">Education</h2>
              <p className="section-head__desc">
                Degrees and current doctoral training.
              </p>
            </header>
            <ol className="timeline">
              {PROFILE.education.map((ed, i) => (
                <li key={ed.degree} className="timeline__item surface-card">
                  <span className="timeline__index" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="timeline__body">
                    <span className="timeline__years">{ed.years}</span>
                    <h3 className="timeline__degree">{ed.degree}</h3>
                    <p className="timeline__school">{ed.school}</p>
                    {ed.detail ? (
                      <p className="timeline__detail">{ed.detail}</p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </RevealSection>

        <RevealSection id="achievements">
          <div className="container">
            <header className="section-head">
              <h2 className="section-head__title">Achievements</h2>
              <p className="section-head__desc">
                Honors, awards, and competitive distinctions.
              </p>
            </header>
            <ul className="achieve-grid">
              {PROFILE.achievements.map((a) => (
                <li key={a.title} className="achieve-card surface-card">
                  <span className="achieve-card__year">{a.year}</span>
                  <p className="achieve-card__title">{a.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </RevealSection>

        <RevealSection id="contact" className="section section--contact">
          <div className="container">
            <header className="section-head">
              <h2 className="section-head__title">Contact</h2>
              <p className="section-head__desc">
                For research-related correspondence, please use the email below.
              </p>
            </header>
            <div className="contact-panel surface-card surface-card--pad-lg">
              <div className="contact-panel__row">
                <span className="contact-panel__label">Email</span>
                <a className="contact-panel__value" href={`mailto:${PROFILE.email}`}>
                  {PROFILE.email}
                </a>
              </div>
              <div className="contact-panel__row">
                <span className="contact-panel__label">Location</span>
                <span className="contact-panel__value">{PROFILE.location}</span>
              </div>
              <div className="contact-panel__social">
                {PROFILE.social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="contact-chip"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </RevealSection>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <p className="footer__copy">
            © {new Date().getFullYear()} {PROFILE.name}
          </p>
          <a href="#about" className="footer__top" onClick={(e) => { e.preventDefault(); scrollToId('about') }}>
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  )
}
