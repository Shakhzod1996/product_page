import React from 'react'
import './MotMain.css'
import MotMainCenter from './MotMainCenter'
import MotMainItem from './MotMainLeft'
import MotMainRight from './MotMainRight/MotMainRight'

export default function MotMain() {
  return (
    <div className='mot-main'>
      <div className='container'>
        <div className='mot-main-grid'>
          <MotMainItem />
          <MotMainCenter />
          <MotMainRight />
        </div>
      </div>
    </div>
  )
}
