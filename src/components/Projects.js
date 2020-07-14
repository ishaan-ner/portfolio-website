import React from "react";
import { projects } from "../projectsData";
import ProjectDetails from "./ProjectDetails/ProjectDetails";

const Projects = () => {
  return (
    <section className="projects">
      <h2>Some recent projects</h2>
      {projects.map((project, idx) => (
        <ProjectDetails key={project.id} project={project} number={idx} />
      ))}
    </section>
  );
};

export default Projects;
