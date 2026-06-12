import React from 'react'
import './Services.css'
import useInView from '../../hooks/useInView'

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: 'Frontend Development',
    desc: 'Pixel-perfect, responsive UIs with React.js and Next.js. Fast, accessible, and built to scale.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    title: 'Backend & APIs',
    desc: 'RESTful APIs and server-side logic using ASP.NET Core and C#. Clean architecture, solid data models.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Full-Stack Apps',
    desc: 'End-to-end web applications — from database design with MySQL/MongoDB to deployment-ready builds.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/>
      </svg>
    ),
    title: 'Angular & SPA',
    desc: 'Structured single-page applications with Angular — component design, routing, and state management.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: 'Maintenance & Support',
    desc: 'Bug fixes, performance audits, refactoring, and ongoing feature development for existing codebases.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'UI/UX Implementation',
    desc: 'Bringing Figma or design specs to life with clean, semantic, and maintainable front-end code.',
  },
]

const Services = () => {
  const [headerRef, headerVisible] = useInView(0.2)
  const [gridRef, gridVisible] = useInView(0.1)

  return (
    <section id="services" className="services">
      <div className="services-container">

        <div
          ref={headerRef}
          className={`services-header ${headerVisible ? 'services-header--visible' : ''}`}
        >
          <p className="section-label">What I do</p>
          <h2 className="section-title">
            Services I <span className="services-accent">offer</span>
          </h2>
          <p className="services-subtitle">
            From concept to deployment — I cover the full development lifecycle
            with a focus on clean code and great user experiences.
          </p>
        </div>

        <div
          ref={gridRef}
          className={`services-grid ${gridVisible ? 'services-grid--visible' : ''}`}
        >
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className="service-card"
              style={{ '--delay': `${i * 80}ms` }}
            >
              <div className="service-icon">{svc.icon}</div>
              <h3 className="service-title">{svc.title}</h3>
              <p className="service-desc">{svc.desc}</p>
              <div className="service-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services