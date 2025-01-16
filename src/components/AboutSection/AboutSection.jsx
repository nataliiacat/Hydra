import React from 'react'
import './AboutSection.css'
import { about } from '../../data.js'

const AboutSection = () => {
  return (
    <>
      <section className="AboutSection container">
        <div className="AboutSection__header flex">
          <div className="AboutSection__title titleDiv">
            <h1 className="title">INTRODUCTION</h1>
            <div className="AboutSection__subtitle flex">
              <h2 className="subtitle">TO HYDRA VR</h2>
              <img src={about.icon} className="icon hide-on-small"></img>
            </div>
          </div>
          <p className="text hide-on-small">{about.info}</p>
        </div>
        <div className="AboutSection__content flex">
          <img src={about.image} alt="HYDRA VR" />
          <div className="AboutSection__text">
            <h1 className="title hide-on-small">ABOUT</h1>
            <h2 className="subtitle hide-on-small">HYDRA VR</h2>
            <p className="text">{about.text}</p>
            <button className="btn">LET’S GET IN TOUCH</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutSection
