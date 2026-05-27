import PublicationAuthors from '../components/PublicationAuthors'
import RevealSection from '../components/RevealSection'
import { PROFILE } from '../data/profile'

function PublicationGroup({ title, items }) {
  if (items.length === 0) return null

  return (
    <section className="pub-section" aria-labelledby={`pub-${title.toLowerCase()}`}>
      <h2 className="pub-section__title" id={`pub-${title.toLowerCase()}`}>
        {title}
      </h2>
      <div className="pub-list--plain" role="list">
        {items.map((pub) => (
          <article key={pub.title} className="pub-entry" role="listitem">
            <a
              href={pub.href}
              className="pub-entry__title"
              target="_blank"
              rel="noreferrer"
            >
              {pub.title}
            </a>
            <PublicationAuthors authors={pub.authors} />
            <p className="pub-entry__venue">
              {pub.venue}, {pub.year}.
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default function Publications() {
  const journals = PROFILE.publications.filter((pub) => pub.type === 'journal')
  const conferences = PROFILE.publications.filter(
    (pub) => pub.type === 'conference'
  )
  const bookChapters = PROFILE.publications.filter(
    (pub) => pub.type === 'book-chapter'
  )

  return (
    <RevealSection className="section--inner">
      <div className="container">
        <header className="section-head">
          <h1 className="section-head__title">Publications</h1>
          <p className="section-head__desc">
            Selected publications will be listed here.
          </p>
        </header>
        <PublicationGroup title="Journals" items={journals} />
        <PublicationGroup title="Conferences" items={conferences} />
        <PublicationGroup title="Book Chapters" items={bookChapters} />
      </div>
    </RevealSection>
  )
}
