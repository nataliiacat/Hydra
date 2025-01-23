import React, { useState } from 'react'
import './Header.css'
import logoName from '../../assets/images/logo-name.svg'
import logoIcon from '../../assets/images/logo-icon.svg'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Header = ({ scrollToSection }) => {
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
          <a href="#homeSection" className="logo-link flex" onClick={() => scrollToSection('homeSection')}>
            <img src={logoIcon} alt="logo icon" />
            <img src={logoName} alt="logo icon" />
          </a>
        </div>
        <div className={active}>
          <ul className="navList flex">
            <li className="navItem">
              <a href="#aboutSection" className="navLink" onClick={() => scrollToSection('aboutSection')}>ABOUT</a>
            </li>
            <li className="navItem">
              <a href="#servicesSection" className="navLink"
                onClick={() => scrollToSection('servicesSection')} >SERVICES</a>
            </li>
            <li className="navItem">
              <a href="#technologiesSection" className="navLink"
                onClick={() => scrollToSection('technologiesSection')}>TECHNOLOGIES</a>
            </li>
            <li className="navItem">
              <a href="#processSection" className="navLink"
                onClick={() => scrollToSection('processSection')}>HOW TO</a>
            </li>
            <div className="btnDiv flex">
              <button className=" contact-btn">
                <a href="#OptIn" className="navLink"
                  onClick={() => scrollToSection('OptIn')}>CONTACT US</a>
              </button>
              <button className="btn">
                <a href="#OptIn" className="navLink"
                  onClick={() => scrollToSection('OptIn')}>JOIN HYDRA</a>
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