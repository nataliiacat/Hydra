import React from 'react'
import './TechSection.css'
import { tech } from '../../data.js'
import { IoIosArrowDown } from 'react-icons/io'

const TechSection = () => {
  return (
    <>
      <section className="TechSection container" id="technologiesSection">
        <div className="techContent titleDiv">
          <h1 className="title">TECHNOLOGIES & HARDWARE</h1>
          <h2 className="subtitle">USED BY HYDRA VR.</h2>
        </div>
        <div className="btn"><IoIosArrowDown className="icon" /></div>
        <div className="company grid">
          {tech.map((image) => (
            <div key={image.id} className="company-img">
              <img src={image.src} alt={image.alt} />
              </div>
          ))}
            </div>
      </section>
    </>
  );
};

export default TechSection;
