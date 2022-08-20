import React from 'react'
import './Plan.css'

const Plan = ({ title, quality, button, color }) => {
  return (
    <div className='plan'>
       <div className='plan__title'>
            <h4>{title}</h4>
            <span>{quality}</span>
       </div>
      <button className={`plan__button ${color ? 'plan__button-gray': ''}`}>{button}</button>
    </div>
  )
}

export default Plan