import React, { useRef, useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Navbar.css'
// import logo from '../../assets/logo.svg'
// import underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'


const Navbar = () => {
  const [menu,setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }
  return (
    <div className='navbar'>
        <h1 className='logo'>KRIPESH</h1>
        <img src={menu_open} onClick={openMenu} alt='' className='nav-mob-open'/>
        <ul ref={menuRef} className='nav-menu'>
            <img className='nav-mob-close' onClick={closeMenu} src={menu_close} alt='' />
            <li><AnchorLink className='anchor-link' offset={50} href='#home'><p className={menu === 'home'? 'clicked' : ''} onClick={()=> setMenu("home")}>Home</p></AnchorLink ></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p className={menu === 'about'? 'clicked' : ''} onClick={()=> setMenu("about")}>About Me</p></AnchorLink> </li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'><p className={menu === 'services'? 'clicked' : ''} onClick={()=> setMenu("services")}>Services</p></AnchorLink ></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#work'><p className={menu === 'work'? 'clicked' : ''} onClick={()=> setMenu("work")}>Portfolio</p></AnchorLink ></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p className={menu === 'contact'? 'clicked' : ''} onClick={()=> setMenu("contact")}>Contact</p></AnchorLink></li>
        </ul>
        <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
     
    </div>
  )
}

export default Navbar
