import RevealSection from '../components/RevealSection'
import convocation1 from '../assets/gallery/convocation-1.jpg'
import convocation2 from '../assets/gallery/convocation-2.jpg'

const PLACEHOLDER_ITEMS = [
  { id: 'convocation-1', src: convocation1, alt: 'Convocation photo 1' },
  { id: 'convocation-2', src: convocation2, alt: 'Convocation photo 2' },
]

export default function Gallery() {
  return (
    <RevealSection className="section--inner">
      <div className="container">
        <header className="section-head section-head--compact">
          <h1 className="section-head__title">Gallery</h1>
        </header>
        <figure className="gallery-group">
          <div className="gallery-grid">
            {PLACEHOLDER_ITEMS.map((item) => (
              <div key={item.id} className="gallery-card">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="gallery-card__media"
                />
              </div>
            ))}
          </div>
          <figcaption className="gallery-group__caption">
            Receiving the University Gold Medal for securing First Class First
            Position in M.E., Jadavpur University, 2025.
          </figcaption>
        </figure>
      </div>
    </RevealSection>
  )
}
