import React from "react";
import { svgArray } from "../assets/svgs";

const Skills = () => {
  const coreFrontEnd = [
    "Core Front-End:",
    "HTML5",
    "CSS3",
    "Javascript",
    "React",
    "jQuery",
  ];

  const reactSkills = [
    "React Concepts:",
    "Hooks",
    "Context API",
    "lifecycle Methods",
    "Axios fetch requests",
    "REDUX",
  ];

  const styling = [
    "Advanced Styling:",
    "Bootstrap",
    "SASS",
    "Material UI",
    "Styled Components",
    "Tailwind CSS",
  ];

  const requests = [
    "REST APIs and HTTP Requests:",
    "AJAX",
    "fetch API",
    "GraphQL/Apollo",
  ];

  const versionControl = ["Version Control:", "Git", "GitHub"];

  const packageManagers = ["Package Managers:", "NPM", "Yarn"];

  return (
    <section className="skills">
      <div className="svg-grid">
        {svgArray.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
      <h2>My Tech-Stack Includes</h2>
      <div className="skills-table">
        <p>
          {coreFrontEnd.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </p>
        <p>
          {reactSkills.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </p>
        <p>
          {styling.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </p>
        <p>
          {requests.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </p>
        <p>
          {versionControl.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </p>
        <p>
          {packageManagers.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default Skills;
