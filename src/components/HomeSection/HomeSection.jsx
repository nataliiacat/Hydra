import React from 'react'
import './HomeSection.css'
import virtual from '../../assets/images/virtua.jpg'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { RiMapPinLine, RiMailLine } from 'react-icons/ri'
import { BiPhoneCall } from 'react-icons/bi'

const HomeSection = () => {
  return (
    <>
      <section className="HomeSection" id="homeSection">
        <div className="container">
          <div className="contentHome flex">
            <div className="content-text flex">
              <h1 className="title"><span className="title-gradient">Dive </span>Into The Depths<br />Of
                <span className="title-gradient"> Virtual Reality</span>
              </h1>
              <p className="text hide-on-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore
                nisl tincidunt eget. Lectus mauris eros in vitae.</p>
              <div className="btn-content flex">
                <button className="btn">BUILD YOUR WORLD</button>
                <IoIosArrowRoundForward className="icon big-icon hide-on-small" /></div>
            </div>
            <div className="content-img">
              <img src={virtual} alt="virtual" />
            </div>
          </div>
          <div className="infoHome flex">
            <div className="infoHome__item flex">
              <RiMailLine className="icon big-icon" />
              <div className="infoHome__info">
                <h3 className="subtitle-info">Send Us a Message</h3>
                <a href="contact@hydra.com">contact@hydra.com</a>
              </div>
            </div>
            <div className="infoHome__item tel-info flex">
              <BiPhoneCall className="icon big-icon" />
              <div className="infoHome__info">
                <h3 className="subtitle-info">Give Us a Call</h3>
                <a href="tel:(110) 1111-1010" className="text">(110) 1111-1010</a>
              </div>
            </div>
            <div className="infoHome__item flex">
              <RiMapPinLine className="icon big-icon" />
              <div className="infoHome__info">
                <h3 className="subtitle-info">Pay Us a Visit</h3>
                <address className="text">Union St, Seattle, WA 98101, United States</address>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default HomeSection
