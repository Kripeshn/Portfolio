import React, { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'About',    id: 'about'    },
    { label: 'My Work',  id: 'work'   },
    { label: 'Experience', id: 'experience' },
    { label: 'Services', id: 'services' },
    { label: 'Contact',  id: 'contact'  }
  ]

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 68 // navbar height
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar-inner">
        <button className="navbar-logo" onClick={() => scrollTo('hero')}>
          <span className="navbar-logo-dot" />
          <span>Kripesh<span className="navbar-logo-accent">.</span></span>
        </button>

        <ul className={`navbar-links ${menuOpen ? 'navbar-links--open' : ''}`}>
          {links.map(({ label, id }) => (
            <li key={id}>
              <button className="navbar-link" onClick={() => scrollTo(id)}>
                {label}
              </button>
            </li>
          ))}
          <li>
            <button className="btn-primary navbar-cta" onClick={() => scrollTo('contact')}>
              Hire me
            </button>
          </li>
        </ul>

        <button
          className={`navbar-hamburger ${menuOpen ? 'navbar-hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}

export default Navbar