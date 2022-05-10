import React from 'react'

export default function RightHeader({img, desc, id}) {
  return (
    <li className='right-head-card'>
      <a className='right-head-a' href="#">
        <i className={img}></i>
        <p>{desc}</p>
      </a>
  
    </li>
  )
}
