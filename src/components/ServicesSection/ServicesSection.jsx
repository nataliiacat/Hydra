import React, { useState } from 'react'
import './ServicesSection.css'
import { services, about, slider } from '../../data.js'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const ServicesSection = () => {
  const [currentIndex, setCurretIndex] = useState(0);
  const servicesPerPage = 3;
  let touchStartX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    const touchEndX = e.touches[0].clientX;
    const swipeThreshold = 50;

    if (touchStartX - touchEndX > swipeThreshold) {
      setCurretIndex((prevIdex) => (prevIdex + 1) % slider.length);
    }
    if (touchEndX - touchStartX > swipeThreshold) {
      setCurretIndex((prevIdex) =>
        prevIdex === 0 ? slider.length - 1 : prevIdex - 1
      );
    }
  };
  const handleNext = () => {
    setCurretIndex((prevIdex) => (prevIdex + 1) % slider.length);
  };
  const handlePrev = () => {
    setCurretIndex((prevIdex) =>
      prevIdex === 0 ? slider.length - 1 : prevIdex - 1
    );
  };
  const getVisibleServices = () => {
    const startIndex = currentIndex;
    const endIndex = (startIndex + servicesPerPage) % slider.length;

    if (startIndex < endIndex) {
      return slider.slice(startIndex, endIndex);
    } else {
      return [
        ...slider.slice(startIndex),
        ...slider.slice(0, endIndex),
      ];
    }
  };

  const visibleServices = getVisibleServices();
  return (
    <>
      <section className="ServicesSection container" onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}>
        <div className="ServicesSection__header flex">
          <div className="header__title titleDiv">
            <h1 className="title">WHY BUILD</h1>
            <div className="header__subtitle flex">
              <h2 className="subtitle">WITH HYDRA?</h2>
              <img src={about.icon} className="icon hide-on-small"></img>
            </div>
          </div>
          <p className="text hide-on-small">{services.info}</p>
        </div>
        <div className="slider-btns">
          <button onClick={handlePrev} className="slider-btn prev-btn btn"><IoIosArrowBack className="icon" /></button>
          <button onClick={handleNext} className="slider-btn next-btn btn"><IoIosArrowForward className="icon" /></button></div>
        <div />
        <div className="slider">
          <div className="slider-grid">
            {visibleServices.map((slider) => (
              <div key={slider.id} className="services">
                <img
                  src={slider.image}
                  alt={slider.title}
                  className="services-img"
                />
                <h3 className="subtitle-info">{slider.title}</h3>
                <p className="text">{slider.text}</p>
                <button className="btn">TRY IT NOW</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesSection
