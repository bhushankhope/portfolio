import React from 'react'
import ControlledAccordions from './accordion'
import '../css/experience.css'

function Experience () {
  // const experienceData = [
  //   {
  //     'role': 'Angular Developer @CNS Indiana University',
  //     'duration': 'May 2022 - August 2023',
  //     'summary': 'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam'
  //   },
  //   {
  //     'role': 'Application Development Associate @Accenture',
  //     'duration': 'December 2020 - October 2021',
  //     'summary': 'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam'
  //   },
  //   {
  //     'role': 'Test Engineer Intern @Globalstep Pvt Ltd',
  //     'duration': 'Jan 2019 - June 2019',
  //     'summary': 'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam'
  //   }
  // ];

  return (
    <div className='exp-container'>
        <h1 className='exp-title'>My Experience</h1>
      <ControlledAccordions />
    </div>
  )
}

export default Experience