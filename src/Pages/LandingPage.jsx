import React from 'react'
import Brands from '../Componenents/Brands/Brands';
import Header from '../Componenents/Header/Header'
import Herosection from '../Componenents/Hero/Hero_section';
import Banner from '../Componenents/Banner/Banner';
import Services from '../Componenents/Services/Services';
import Engage from '../Componenents/Engage/Engage';

const LandingPage = () => {
  return (
    <div>
      <Header/>
      <Herosection/>
      <Brands/>
      <Engage/>
      <Services/>
      <Banner/>
    </div>
  )
}

export default LandingPage