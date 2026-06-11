import React from 'react'
import './Hero.css'
import profile from '../../assets/hero.jpg'
import resume from '../../assets/KripeshCV.pdf'

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 68
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-container">

        {/* ── Left: content ── */}
        <div className="hero-content">

          <p className="hero-eyebrow hero-anim hero-anim--1">
            <span className="hero-eyebrow-dot" />
            Full-stack developer · Open to work
          </p>

          <h1 className="hero-headline hero-anim hero-anim--2">
            <span className="hero-headline-intro">Hello, I'm</span>
            <span className="hero-headline-name">Kripesh<br />Neupane.</span>
            <span className="hero-headline-role">Building the web, end to end.</span>
          </h1>

          <p className="hero-body hero-anim hero-anim--3">
            Recent B.Sc. CSIT graduate with real-world experience in{' '}
            <strong>ASP.NET, React, Next.js</strong> and <strong>MongoDB</strong>.
            I care about clean architecture, fast interfaces, and software that
            actually ships.
          </p>

          <div className="hero-actions hero-anim hero-anim--4">
            <button className="btn-primary" onClick={() => scrollTo('contact')}>
              Let's work together
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"
                strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <a className="btn-outline" href={resume} target="_blank" rel="noreferrer">
              View résumé
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"
                strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </a>
          </div>

          <div className="hero-stats hero-anim hero-anim--4">
            <div className="hero-stat">
              <span className="hero-stat-number">1+</span>
              <span className="hero-stat-label">Year professional experience</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-number">10+</span>
              <span className="hero-stat-label">Projects shipped</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-number">5+</span>
              <span className="hero-stat-label">Technologies mastered</span>
            </div>
          </div>

        </div>

        {/* ── Right: image ── */}
        <div className="hero-image-col hero-anim hero-anim--5">
          <div className="hero-image-wrap">
            <div className="hero-image-glow" aria-hidden="true" />
            <div className="hero-image-frame">
              <img src={profile} alt="Kripesh Neupane" className="hero-image" />
            </div>
            {/* <div className="hero-availability">
              <span className="hero-availability-dot" />
              Available for hire
            </div> */}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero