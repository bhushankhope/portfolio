import React from 'react';
import '../css/projects.css';
import ProjectCard from './card';

const projectData = [
  {
    image: "/assets/carousel1.svg",
    title: "Human Reference Atlas Portal",
    description: "3D Multiscale Biomolecular Human Reference Atlas Construction, Visualization and Usage",
    buttonLabel: [
      {
        label: "Visit",
        url: "https://humanatlas.io"
      },
      {
        label: "GitHub",
        url: "https://github.com/bhushankhope/humanatlas.io"
      }
    ]
  },
  {
    image: "/assets/streamcrew.png",
    title: "Stream Crew",
    description: "An on-demand video streaming service that allows multiple users to stream videos",
    buttonLabel:
      [
        {
          label: "GitHub",
          url: "https://github.com/bhushankhope/StreamCrew"
        }
      ]
  },
  {
    image: "/assets/nile.png",
    title: "Nile - The Delivery Management Application",
    description: "A Full Stack Delivery Management application for delivery management.",
    buttonLabel: [
      {
        label: "GitHub",
        url: "https://github.iu.edu/bkhope/CSCI-P565-Fall22-Nile"
      }
    ]
  },
  {
    image: "/assets/empManager.png",
    title: "Employee Manager Application",
    description: "An employee manager application using Angular and Spring Boot framework.",
    buttonLabel: [
      {
        label: "GitHub",
        url: "https://github.com/bhushankhope/employeemanagerapp"
      }
    ]
  }
];

function Projects() {
  return (
    <div className="projects-container">
      <h3 className='project-title'>My Projects</h3>
      <div className='projects'>
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            image={`${process.env.PUBLIC_URL}${project.image}`}
            title={project.title}
            description={project.description}
            buttonLabel={project.buttonLabel}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
