import React from 'react'
import './Footer.css'
import useInView from '../../hooks/useInView'

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/kripeshn',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/kripesh-neupane',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:kripeshn90@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
]

const navLinks = [
  { label: 'About',    id: 'about'    },
  { label: 'My Work',  id: 'mywork'   },
  { label: 'Services', id: 'services' },
  { label: 'Contact',  id: 'contact'  },
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 68
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

const Footer = () => {
  const [ref, isVisible] = useInView(0.2)

  return (
    <footer
      ref={ref}
      className={`footer ${isVisible ? 'footer--visible' : ''}`}
    >
      <div className="footer-container">
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-dot" />
              <span>Kripesh<span className="footer-logo-accent">.</span></span>
            </div>
            <p className="footer-tagline">
              Full-stack developer based in Kathmandu, Nepal.<br />
              Open to projects, collaborations &amp; opportunities.
            </p>
          </div>

          {/* Nav */}
          <nav className="footer-nav">
            <p className="footer-nav-label">Quick links</p>
            <ul className="footer-nav-list">
              {navLinks.map(({ label, id }) => (
                <li key={id}>
                  <button className="footer-nav-link" onClick={() => scrollTo(id)}>
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="footer-socials-wrap">
            <p className="footer-nav-label">Find me on</p>
            <div className="footer-socials">
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  className="footer-social-link"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Kripesh. Designed &amp; built with care.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer