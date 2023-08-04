import React from 'react'
import '../css/projects.css'
import ProjectCard from './card';

function Projects() {
  return (
    <div>
      <h3 className='project-title'>My Projects</h3>
      <ProjectCard></ProjectCard>
    </div>
  )
}

export default Projects;