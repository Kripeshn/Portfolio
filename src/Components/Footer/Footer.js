import React from 'react'
import './Footer.css'
// import footer_logo from '../../assets/footer_logo.svg'
// import user_icon from '../../assets/user_icon.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className='footer-topleft'>
                <h2>KRIPESH</h2>
                <p>I am a frontend developer from Bhaktapur with an eager interest in developing web applications.</p>

            </div>
            
        </div>    
        <hr />
        <div className='footer-bottom'>
            <div className='footer-bottomleft'>&copy; 2024 Kripesh Neupane. All Rights Reserved.</div>
            <div className='footer-bottomright'>
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <AnchorLink className='anchor-link' offset={50} href='#contact'><p>Connect with me</p></AnchorLink>
            </div>
        </div>
    </div>
  )
}

export default Footer
