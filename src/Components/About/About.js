import React from 'react'
import './About.css'
import my_photo from '../../assets/profile2.jpg'

const skills = [
  { name: 'HTML & CSS', level: 75 },
  { name: 'JavaScript', level: 80 },
  { name: 'React JS', level: 70 },
  { name: 'C / C++', level: 80 },
  { name: 'C# · ASP.NET', level: 60 },
]

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">

        {/* ── Left: photo + badge ── */}
        <div className="about-left">
          <div className="about-photo-wrap hero-anim hero-anim--1">
            <img
              src={my_photo}
              alt="Profile"
              className="about-photo"
            />

            <div className="about-badge">
              <span className="about-badge-dot" />
              Open to work
            </div>
          </div>
        </div>

        {/* ── Right: content ── */}
        <div className="about-right">

          {/* Header */}
          <div className="about-header hero-anim hero-anim--1">
            <p className="section-label">About me</p>

            <h2 className="section-title">
              Building things
              <br />
              <span className="about-title-accent">
                that matter
              </span>
            </h2>
          </div>

          {/* Paragraphs */}
          <div className="about-paras hero-anim hero-anim--2">
            <p>
              I am a recent B.Sc. CSIT graduate with hands-on experience
              in software development through a professional internship
              and personal projects. I've worked with{' '}
              <strong>
                ASP.NET, C#, Angular, React.js, Next.js, MySQL
              </strong>{' '}
              and <strong>MongoDB</strong> to build web applications and
              enterprise solutions.
            </p>

            <p>
              I'm passionate about full-stack development and continuously
              strive to improve my technical skills — aiming to contribute
              to innovative projects and grow into a developer capable of
              shipping scalable, impactful software.
            </p>
          </div>

          {/* Skills */}
          <div className="about-skills hero-anim hero-anim--3">
            <p className="about-skills-label">
              Technical skills
            </p>

            {skills.map((skill) => (
              <div key={skill.name} className="skill-row">
                <div className="skill-meta">
                  <span className="skill-name">
                    {skill.name}
                  </span>

                  <span className="skill-pct">
                    {skill.level}%
                  </span>
                </div>

                <div className="skill-track">
                  <div
                    className="skill-fill"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default About