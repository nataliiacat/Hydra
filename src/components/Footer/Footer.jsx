import React from 'react'
import './Footer.css'
import logoIcon from '../../assets/images/logo-icon.svg'
import { FaYoutube, FaInstagram, FaFacebook, FaLinkedinIn, FaTwitter, FaPinterestP } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <footer className="footer container">
        <div className="footer-top flex">
          <div className="footerInner">
            <a href="#" className="logo-footer">
              <img src={logoIcon} alt="logo" />
            </a>
          </div>
          <div className="footerInner flex">
            <div className="footerItems">
              <ul>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">SERVICES</a></li>
                <li><a href="#">TECHNOLOGIES</a></li>
                <li><a href="#">HOW TO</a></li>
                <li><a href="#">JOIN HYDRA</a></li>
              </ul>
            </div>
            <div className="footerItems">
              <ul>
                <li><a href="#">F.A.Q</a></li>
                <li><a href="#">SITEMAP</a></li>
                <li><a href="#">CONDITIONS</a></li>
                <li><a href="#">LICENSES</a></li>
              </ul>
            </div>
          </div>
          <div className="footerInner">
            <h3 className="subtitle-info">SOCIALIZE WITH HYDRA</h3>
            <ul className="social-link flex">
              <li><a href="#"><FaYoutube className="icon" /></a></li>
              <li><a href="#"><FaInstagram className="icon" /></a></li>
              <li><a href="#"><FaFacebook className="icon" /></a></li>
              <li><a href="#"><FaLinkedinIn className="icon" /></a></li>
              <li><a href="#"><FaTwitter className="icon" /></a></li>
              <li><a href="#"><FaPinterestP className="icon" /></a></li>
            </ul>
            <button className="btn">BUILD YOUR WORLD</button>
          </div>
        </div>
        <p className="text">2025 © HYDRA LANDING PAGE - ALL RIGHTS RESERVED </p>
      </footer>
    </>
  )
}

export default Footer
