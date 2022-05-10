import React from 'react';
import img1 from '../../assets/img1.webp'

export default function MotMainItem() {
  return (
    <div className='mot-left'>
      <div className='main-img-div'>
        <img className='img1' src={img1} alt="img" />
      </div>

      <div className='img-slider'>
        <img src={img1} alt="img" />
        <img src={img1} alt="img" />
        <img src={img1} alt="img" />
        <img src={img1} alt="img" />
        <img src={img1} alt="img" />
      </div>
    </div>
  )
}
