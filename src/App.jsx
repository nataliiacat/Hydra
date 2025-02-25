import React from 'react'
import './assets/styles/global.css'
import Header from './components/Header/Header'
import HomeSection from './components/HomeSection/HomeSection'
import AboutSection from './components/AboutSection/AboutSection'
import ServicesSection from './components/ServicesSection/ServicesSection'
import TechSection from './components/TechSection/TechSection'
import ProcessSection from './components/ProcessSection/ProcessSection'
import OptInSection from './components/OptInSection/OptInSection'
import Footer from './components/Footer/Footer'

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

function App() {
  return (
    <>
      <Header scrollToSection={scrollToSection} />
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <TechSection />
      <ProcessSection />
      <OptInSection />
      <Footer />
    </>
  )
}

export default App
