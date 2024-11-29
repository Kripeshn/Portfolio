import React from 'react'
import './About.css'
import my_photo from '../../assets/profile.jpg'
import theme_pattern from '../../assets/theme_pattern.png'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <h1>About Me</h1>
            <img src={theme_pattern} alt='' />
        </div>
        <div className="about-section">
            <div className='about-left'>
            <img src={my_photo} alt='' />

            </div>
            <div className='about-right'>
              <div className='about-para'>
        <p>I'm a student currently pursuing a B.Sc. in Computer Science and Information Technology (CSIT) degree. I'm deeply passionate about frontend development and am continuously honing my skills in this area. </p>
        <p>My goal is to secure opportunities in the tech industry where I can apply my knowledge, grow as a developer, and contribute to innovative projects.</p>
                
              </div>
              <div className='about-skills'>
                <div className='about-skill'><p>HTML & CSS</p><hr style = {{width: "80%"}}/></div>
                <div className='about-skill'><p>Javascript</p><hr style = {{width: "70%"}}/></div>
                <div className='about-skill'><p>React JS</p><hr style = {{width: "60%"}}/></div>
                <div className='about-skill'><p>C, C++</p><hr style = {{width: "90%"}}/></div>
              </div>
            </div>

        </div>
      <div className='about-achievements'>
      <div className='about-achievement'>

        
      </div>
        
      </div>
    </div>
  )
}

export default About
