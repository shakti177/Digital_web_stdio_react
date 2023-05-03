import React from 'react'
import Brands from '../Componenents/Brands/Brands';
import Header from '../Componenents/Header/Header'
import Herosection from '../Componenents/Hero/Hero_section';

const LandingPage = () => {
  return (
    <div>
      <Header/>
      <Herosection/>
      <Brands/>
    </div>
  )
}

export default LandingPage