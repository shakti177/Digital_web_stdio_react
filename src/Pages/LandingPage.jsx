import React from 'react'
import Brands from '../Componenents/Brands/Brands';
import Header from '../Componenents/Header/Header'
import Herosection from '../Componenents/Hero/Hero_section';
import Banner from '../Componenents/Banner/Banner';
import Services from '../Componenents/Services/Services';
import Engage from '../Componenents/Engage/Engage';
import Team from '../Componenents/Team/Team';

const LandingPage = () => {
  return (
    <div>
      <Header/>
      <Herosection/>
      <Brands/>
      <Engage/>
      <Services/>
      <Banner/>
      <Team/>
    </div>
  )
}

export default LandingPage