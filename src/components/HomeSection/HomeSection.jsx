import React from 'react'
import './HomeSection.css'
import virtual from '../../assets/images/virtua.jpg'
import { IoIosArrowRoundForward } from 'react-icons/io'

const HomeSection = () => {
  return (
    <>
      <section className="HomeSection">
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
                <IoIosArrowRoundForward className="icon hide-on-small" /></div>
            </div>
            <div className="content-img">
              <img src={virtual} alt="virtual" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeSection
