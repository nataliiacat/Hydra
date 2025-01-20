import React from 'react'
import './assets/styles/global.css'
import Header from './components/Header/Header'
import HomeSection from './components/HomeSection/HomeSection'
import AboutSection from './components/AboutSection/AboutSection'
import ServicesSection from './components/ServicesSection/ServicesSection'
import TechSection from './components/TechSection/TechSection'
import ProcessSection from './components/ProcessSection/ProcessSection'

function App() {
  return (
    <>
    <Header/>
    <HomeSection/>
    <AboutSection/>
    <ServicesSection/>
    <TechSection/>
    <ProcessSection/>
    </>
  )
}

export default App
