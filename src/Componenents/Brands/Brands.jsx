import React from 'react'
import './Brands.css'
import brand1 from '../../Assests/brand1.png'
import brand2 from '../../Assests/brand2.png'
import brand3 from '../../Assests/brand3.png'
import brand4 from '../../Assests/brand4.png'

const Brands = () => {
  return (
    <secions id="brands">
        <img src={brand1} alt="" />
        <img src={brand2} alt="" />
        <img src={brand3} alt="" />
        <img src={brand4} alt="" />
    </secions>
  )
}

export default Brands