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
                  <p>
                  I am a recent B.Sc. CSIT graduate with hands-on experience in software development through a professional internship and personal projects. I have worked with technologies such as ASP.NET, C#, Angular, React.js, Next.js, MySQL, and MongoDB to build web applications and enterprise solutions.
                  </p>

                  <p>
                  I am passionate about full-stack development and continuously strive to improve my technical skills. My goal is to contribute to innovative software projects, gain industry experience, and grow into a skilled software engineer capable of building scalable and impactful applications.
                  </p>  
              </div>
              <div className='about-skills'>
                <div className='about-skill'><p>HTML & CSS</p><hr style = {{width: "75%"}}/></div>
                <div className='about-skill'><p>Javascript</p><hr style = {{width: "80%"}}/></div>
                <div className='about-skill'><p>React JS</p><hr style = {{width: "70%"}}/></div>
                <div className='about-skill'><p>C, C++</p><hr style = {{width: "80%"}}/></div>
                <div className='about-skill'><p>C#, ASP.NET</p><hr style = {{width: "60%"}}/></div>
              </div>
            </div>

        </div>
      
    </div>
  )
}

export default About
