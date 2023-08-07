import React from 'react'
import ControlledAccordions from './accordion'
import '../css/experience.css'

function Experience () {
  return (
    <div className='exp-container'>
        <h1 className='exp-title'>My Experience</h1>
      <ControlledAccordions />
    </div>
  )
}

export default Experience