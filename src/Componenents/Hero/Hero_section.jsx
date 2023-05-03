import React from 'react'
import './Hero_section.css'
import {BsPlayCircle} from "react-icons/bs";

const Hero_section = () => {
  return (
    <section id="herosection">
      <h4>AWESOME DESIGN</h4>
      <h1>We love make things amazing and simple</h1>
      <p>Maecenas class semper class semper sollicitudin lectus lorem iaculis imperdiet aliquam vehicula tempor auctor curabitur pede aenean ornare.</p>
      <BsPlayCircle size="60px" color='#1bbc9d'/>
    </section>
  )
}

export default Hero_section