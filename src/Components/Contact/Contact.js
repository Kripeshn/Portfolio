import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.png'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import fb from '../../assets/facebook.svg'
import ig from '../../assets/insta.svg'
import git from '../../assets/github.svg'


const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e861e47d-94df-4825-86b1-f17821f65f79");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div id='contact' className='contact'>
      <div className='contact-title'>
        <h1>Get in Touch</h1>
        <img src={theme_pattern } alt='' />
      </div>
      <div className='contact-section'>
        <div className='contact-left'>
            <h1>Let's talk.</h1>
            <p>I'm currently availble to take on a new project, so feel free to contact me through email.</p>
            <div className='contact-details'>
                <div className='contact-detail'>
                    <img src={mail_icon} alt='' /><p>kripeshn90@gmail.com</p>
                </div>
                <div className='contact-detail'>
                <img src={call_icon} alt='' /><p>9745299609</p>

                </div>
                <div className='contact-detail'>
                <img src={location_icon} alt='' /><p>Gatthaghar, Bhaktapur</p>

                </div>
            </div>

            <h1>Follow.</h1>                  
            <div className='contact-socials'>
                <div className='contact-social'>
                    <a href='https://www.facebook.com/kripesmessi' target="blank"><img src={fb} alt='' /></a>
                </div>
                <div className='contact-social'>
               <a href='https://www.instagram.com/_.kripes_10/' target="blank"><img src={ig} alt='' /></a> 
                </div>
                <div className='contact-social'>
                <a href='https://github.com/Kripeshn'  target="blank"><img src={git} alt='' /></a>

                </div>
            </div>


            {/* <div className='follow'>
              <h1>Follow Me on.</h1>

            </div> */}
        </div>
        
        <form onSubmit={onSubmit} className='contact-right'>
            <label>Your Name</label>
            <input type='text' placeholder='Enter your name' name='name' />
            <label>Your Email</label>
            <input type='email' placeholder='Enter your email' name='email' />
            <label>Write your mesage here</label>
            <textarea name='message' rows='8' placeholder='Enter your message'></textarea>
            <button type='submit' className='contact-submit'>Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
