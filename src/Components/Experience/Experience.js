import React from 'react'
import './Experience.css'
import useInView from '../../hooks/useInView'

const experience = {
  role: 'Full Stack Development Intern',
  company: 'Dynamic Techno Soft Pvt. Ltd.',
  location: 'Sankhamul, Kathmandu',
  duration: 'June 2025 – September 2025',
  months: 4,
  type: 'Internship · On-site',
  highlights: [
    {
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        </svg>
      ),
      text: 'Developed backend and database architecture for Academic & Accounting ERP systems — covering student info, scholarships, inventory, book requests, and library management modules.',
    },
    {
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
      text: 'Utilised Entity Framework and stored procedures for efficient database connections, query optimisation, and reliable data handling across ERP modules.',
    },
    {
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
        </svg>
      ),
      text: 'Independently designed and implemented frontend configuration screens using AngularJS, improving user accessibility and interface responsiveness.',
    },
    {
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      text: 'Collaborated with cross-functional teams to integrate backend and frontend components, managing end-to-end module delivery as assigned by supervisors.',
    },
  ],
  stack: ['ASP.NET', 'C#', 'AngularJS', 'MySQL', 'Entity Framework', 'Stored Procedures'],
}

const Experience = () => {
  const [headerRef, headerVisible] = useInView(0.2)
  const [cardRef,   cardVisible]   = useInView(0.1)

  return (
    <section id="experience" className="experience">
      <div className="experience-container">

        {/* ── Header ── */}
        <div
          ref={headerRef}
          className={`experience-header ${headerVisible ? 'experience-header--visible' : ''}`}
        >
          <p className="section-label">Career</p>
          <h2 className="section-title">
            Work <span className="experience-accent">experience</span>
          </h2>
        </div>

        {/* ── Timeline ── */}
        <div
          ref={cardRef}
          className={`experience-timeline ${cardVisible ? 'experience-timeline--visible' : ''}`}
        >
          {/* vertical line */}
          <div className="exp-line">
            <div className={`exp-line-fill ${cardVisible ? 'exp-line-fill--animated' : ''}`} />
          </div>

          {/* card */}
          <div className="exp-card">

            {/* dot on the line */}
            <div className="exp-dot">
              <div className="exp-dot-inner" />
            </div>

            {/* top meta row */}
            <div className="exp-meta">
              <div className="exp-meta-left">
                <span className="exp-type">{experience.type}</span>
                <h3 className="exp-role">{experience.role}</h3>
                <div className="exp-company-row">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                  <span className="exp-company">{experience.company}</span>
                  <span className="exp-sep">·</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span className="exp-location">{experience.location}</span>
                </div>
              </div>

              <div className="exp-meta-right">
                <div className="exp-duration-badge">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  {experience.duration}
                </div>
                <div className="exp-months-badge">
                  <div
                    className="exp-months-fill"
                    style={{ '--months': experience.months }}
                  />
                  <span>{experience.months} months</span>
                </div>
              </div>
            </div>

            {/* highlights */}
            <ul className="exp-highlights">
              {experience.highlights.map((h, i) => (
                <li
                  key={i}
                  className="exp-highlight"
                  style={{ '--hi-delay': `${i * 80 + 200}ms` }}
                >
                  <div className="exp-highlight-icon">{h.icon}</div>
                  <p>{h.text}</p>
                </li>
              ))}
            </ul>

            {/* tech stack */}
            <div className="exp-stack">
              <span className="exp-stack-label">Stack used</span>
              <div className="exp-stack-tags">
                {experience.stack.map(tech => (
                  <span key={tech} className="exp-stack-tag">{tech}</span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience