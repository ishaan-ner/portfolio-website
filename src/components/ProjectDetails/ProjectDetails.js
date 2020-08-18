import React from "react";
import "./project-details.styles.scss";

const ProjectDetails = ({ project, number }) => {
  return (
    <div className="project-details">
      <div className={`project-description ${number % 2 !== 0 ? "even" : ""}`}>
        <h4>Featured Project</h4>
        <h3>{project.name}</h3>
        <div className="summary">{project.description}</div>

        <ul>
          {project.techStack.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <div className="project-buttons">
          <a href={project.code} target="_blank" rel="noopener noreferrer">
            <button className="btn">Source Code</button>
          </a>
          <a href={project.website} target="_blank" rel="noopener noreferrer">
            <button className="btn" id="demo">
              Demo
            </button>
          </a>
        </div>
      </div>

      <a
        href={project.website}
        target="_blank"
        rel="noopener noreferrer"
        className={`project-img ${number % 2 === 0 ? "odd" : ""}`}
      >
        <div
          className="project-image-container"
          style={{ position: "relative" }}
        >
          <img src={project.image} alt={project.name} />
        </div>

        {/* <div className="project-image-details">
          <p>
            <span>Challenges:</span> {project.challenges}
          </p>
          <p>
            <span>Solutions:</span> {project.solutions}
          </p>
        </div> */}
      </a>
    </div>
  );
};

export default ProjectDetails;
