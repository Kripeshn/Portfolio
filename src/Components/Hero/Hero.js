import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile} alt=''/>
        <h1><span>Hi! I'm Kripesh Neupane</span>, a frontend developer.</h1>
        <p>I am a student currently pursuing a B.Sc. in Computer Science and Information Technology (CSIT) degree and is passionate about frontend development</p>
        <div className='hero-action'>
            <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <a className='hero-resume' href='https://drive.google.com/file/d/1zfAnvzwN_CUKXG-4yiyBuhVXm-cphk4I/view?usp=sharing' target='blank'>Resume</a>
        </div>
    </div>
  )
}

export default Hero