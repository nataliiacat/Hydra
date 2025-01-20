import React from 'react'
import './ProcessSection.css'
import { process, about } from '../../data.js'

const ProcessSection = () => {

  return (
    <section className="process container">
      <div className="process__header flex">
        <div className="titleDiv">
          <h1 className="title">HOW WE BUILD</h1>
          <div className="header__subtitle flex">
            <h2 className="subtitle">WITH HYDRA VR?</h2>
            <img src={about.icon} className="icon hide-on-small" />
          </div>
        </div>
        <p className="text hide-on-small">{process.info}</p>
      </div>
      <div className="processDiv">
        <div className="process__blocks container">
          {process.inner.map((item) => (
            <div className="block flex" key={item.id}>
              <div className="number icon">{item.number}</div>
              <div className="subtitle-info">{item.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;