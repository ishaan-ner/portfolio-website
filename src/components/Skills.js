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
    "React Skills:",
    "Hooks",
    "Context API",
    "lifecycle Methods",
    "Axios ",
    "REDUX",
    "Formik",
  ];

  const styling = [
    "Styling:",
    "Bootstrap",
    "SASS",
    "Material UI",
    "Styled Components",
    "Tailwind CSS",
  ];

  const cloudServices = ["Cloud Services:", "Firebase", "Heroku"];

  const versionControl = ["Version Control:", "Git", "GitHub"];

  const packageManagers = ["Package Managers:", "NPM", "Yarn"];

  const testing = ["Testing:", "JEST"];

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
          {cloudServices.map((item) => (
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
        <p>
          {testing.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default Skills;
