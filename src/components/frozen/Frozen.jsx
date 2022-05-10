import React from 'react';
import './Frozen.css'

export default function Frozen() {
  return (
    <div className='frozen'>
      <div className='container'>
        <div className='frozen-inside'>
          <ul className='froze-ul'>
            <li>Frozen<i className='bx bx-chevron-right'></i></li>
            <li>Juice<i className='bx bx-chevron-right'></i></li>
            <li>Mott's Unsweetened Applesauce</li>
          </ul>

          <div className='back'>
            <i className='bx bx-subdirectory-left'></i>
            <p>Back</p>
          </div>
        </div>
      </div>
    </div>
  )
}
