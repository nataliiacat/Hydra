import React, { useState } from 'react'
import './Header.css'
import logoName from '../../assets/images/logo-name.svg'
import logoIcon from '../../assets/images/logo-icon.svg'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Header = () => {
  const [active, setActive] = useState('navBar')
  const showNav = () => {
    setActive('navBar activeNavbar')
  }
  const removeNavbar = () => {
    setActive('navBar')
  }
  return (
    <>
      <header className="header container flex">
        <div className="logo">
          <a href="#" className="logo-link flex">
            <img src={logoIcon} alt="logo icon" />
            <img src={logoName} alt="logo icon" />
          </a>
        </div>
        <div className={active}>
          <ul className="navList flex">
            <li className="navItem">
              <a href="#aboutSection" className="navLink">ABOUT</a>
            </li>
            <li className="navItem">
              <a href="#servicesSection" className="navLink">SERVICES</a>
            </li>
            <li className="navItem">
              <a href="#technologiesSection" className="navLink">TECHNOLOGIES</a>
            </li>
            <li className="navItem">
              <a href="#heroSection" className="navLink">HOW TO</a>
            </li>
            <div className="btnDiv flex">
              <button className=" contact-btn">
                <a href="#footer" className="navLink">CONTACT US</a>
              </button>
              <button className="btn">
                <a href="#footer" className="navLink">JOIN HYDRA</a>
              </button>
            </div>
          </ul>
          <div onClick={removeNavbar} className="closeNavbar">
            <AiOutlineClose className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <AiOutlineMenu className="icon" />
        </div>
      </header>
    </>
  )
}

export default Header