import React from 'react'
import '../css/projects.css'
import ProjectCard from './card';

function Projects() {
  return (
    <div className="projects-container">
      <h3 className='project-title'>My Projects</h3>
      <div className='projects'>
        <ProjectCard
          image="https://picsum.photos/200/300"
          title="Human Reference Atlas Portal"
          description="3D Multiscale Biomolecular Human Reference Atlas Construction, Visualization and Usage"
        />
        <ProjectCard
          image="https://picsum.photos/200/300"
          title="Stream Crew"
          description="An on-demand video streaming service that allows multiple users to stream videos"
        />
        <ProjectCard
          image="https://picsum.photos/200/300"
          title="Nile - The Delivery Management Application"
          description="A Full Stack Delivery Management application for delivery management."
        />
        <ProjectCard
          image="https://picsum.photos/200/300"
          title="Employee Manager Application"
          description="An employee manager application using Angular and Spring Boot framework."
        />
      </div>

    </div>
  )
}

export default Projects;