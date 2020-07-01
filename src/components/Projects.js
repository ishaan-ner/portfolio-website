import React from "react";
import { projects } from "../projectsData";

const Projects = () => {
  return (
    <section className="projects">
      <h2>Recent Front-End Projects</h2>
      {projects.map((project) => (
        <div key={project.id} className="project-details">
          <h3>{project.name}</h3>
          <div className="project-img">
            <img src={project.image} alt={project.name} />
          </div>
          <div className="project-buttons">
            <a href={project.code} target="_blank" rel="noopener noreferrer">
              <button className="btn">Code</button>
            </a>
            <a href={project.website} target="_blank" rel="noopener noreferrer">
              <button className="btn">Demo</button>
            </a>
          </div>
          <div className="project-description">
            <p>
              <span>Description:</span> {project.description}
            </p>
            <p>
              <span>Tech-Stack Used:</span> {project.techStack}
            </p>
            <p>
              <span>Challenges faced:</span> {project.challenges}
            </p>
            <p>
              <span>Solutions:</span> {project.solutions}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
