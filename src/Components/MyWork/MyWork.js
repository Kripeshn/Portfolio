import React, { useState } from 'react'
import './MyWork.css'
import useInView from '../../hooks/useInView'
import mywork_data from '../../assets/mywork_data'

// Tech stack mapping — add/adjust as needed
const techMap = {
  1: ['React.js'],
  2: ['React.js', 'Node.js', 'MongoDB'],
  3: ['React.js'],
  4: ['React.js', 'Node.js', 'MongoDB'],
}

const INITIAL_SHOW = 4

const MyWork = () => {
  const [showAll, setShowAll] = useState(false)
  const [headerRef, headerVisible] = useInView(0.2)
  const [gridRef,   gridVisible]   = useInView(0.1)

  const visible = showAll ? mywork_data : mywork_data.slice(0, INITIAL_SHOW)

  return (
    <section id="work" className="mywork">
      <div className="mywork-container">

        {/* ── Header ── */}
        <div
          ref={headerRef}
          className={`mywork-header ${headerVisible ? 'mywork-header--visible' : ''}`}
        >
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">
            My latest <span className="mywork-accent">work</span>
          </h2>
          <p className="mywork-subtitle">
            A handful of projects I'm proud of — ranging from real-time games
            to full-stack web applications.
          </p>
        </div>

        {/* ── Grid ── */}
        <div
          ref={gridRef}
          className={`mywork-grid ${gridVisible ? 'mywork-grid--visible' : ''}`}
        >
          {visible.map((work, i) => (
            <div
              key={work.w_no}
              className="work-card"
              style={{ '--delay': `${i * 90}ms` }}
            >
              {/* thumbnail */}
              <div className="work-thumb">
                <img src={work.w_img} alt={work.name} />

                {/* hover overlay */}
                <div className="work-overlay">
                  <div className="work-overlay-inner">
                    <h3 className="work-overlay-title">{work.name}</h3>
                    <div className="work-overlay-tech">
                      {(techMap[work.w_no] || []).map(t => (
                        <span key={t} className="work-tech-tag">{t}</span>
                      ))}
                    </div>
                    <a
                      href={work.link}
                      className="btn-primary work-cta"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                    >
                      View Project
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M17 7H7M17 7v10"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* card footer */}
              <div className="work-info">
                <div className="work-info-left">
                  <h3 className="work-title">{work.name}</h3>
                  <div className="work-tags-row">
                    {(techMap[work.w_no] || []).map(t => (
                      <span key={t} className="work-tag-small">{t}</span>
                    ))}
                  </div>
                </div>
                <a
                  href={work.link}
                  className="work-link-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${work.name}`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ── Footer: show more / GitHub ── */}
        <div className={`mywork-footer ${gridVisible ? 'mywork-footer--visible' : ''}`}>
          {mywork_data.length > INITIAL_SHOW && (
            <button
              className="btn-outline"
              onClick={() => setShowAll(prev => !prev)}
            >
              {showAll ? 'Show less' : `Show more (${mywork_data.length - INITIAL_SHOW} more)`}
              <svg
                width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                style={{ transform: showAll ? 'rotate(180deg)' : 'none', transition: '0.22s' }}
              >
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
          )}
          <a
            href="https://github.com/kripeshn"
            className="btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            See more on GitHub
          </a>
        </div>

      </div>
    </section>
  )
}

export default MyWork