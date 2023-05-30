import React from 'react'
import Brands from '../Componenents/Brands/Brands';
import Header from '../Componenents/Header/Header'
import Herosection from '../Componenents/Hero/Hero_section';
import Banner from '../Componenents/Banner/Banner';
import Services from '../Componenents/Services/Services';
import Engage from '../Componenents/Engage/Engage';
import Team from '../Componenents/Team/Team';
import Banner2 from '../Componenents/Banner2/Banner2';
import Pricing from '../Componenents/Pricing/Pricing';
import Testimonials from '../Componenents/Testimonials/Testimonials';
import News from '../Componenents/News/News';
import Contact from '../Componenents/Contact/Contact';
import Footer from '../Componenents/Footer/Footer';
import Copyright from '../Componenents/Copyright/Copyright';

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
      <Pricing/>
      <Testimonials/>
      <Banner2/>
      <News/>
      <Contact/>
      <Footer/>
      <Copyright/>
    </div>
  )
}

export default LandingPage