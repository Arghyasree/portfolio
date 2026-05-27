import { useCallback, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { PROFILE } from '../data/profile'

const NAV_ITEMS = [
  { path: '/', label: 'Home', end: true },
  { path: '/research', label: 'Research' },
  { path: '/publications', label: 'Publications' },
  { path: '/education', label: 'Education' },
  { path: '/experience', label: 'Experience' },
  { path: '/achievements', label: 'Achievements' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    if (!menuOpen) return undefined

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen])

  return (
    <header className={`nav-wrap ${scrolled ? 'nav-wrap--scrolled' : ''}`}>
      <nav ref={navRef} className="nav site-nav" aria-label="Primary">
        <NavLink to="/" className="nav__brand" end onClick={closeMenu}>
          <span className="nav__brand-mark" aria-hidden="true" />
          <span className="nav__brand-text">{PROFILE.name}</span>
        </NavLink>

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
          {NAV_ITEMS.map(({ path, label, end }) => (
            <li key={path}>
              <NavLink
                to={path}
                end={end}
                className={({ isActive }) =>
                  `nav__link${isActive ? ' nav__link--active' : ''}`
                }
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
