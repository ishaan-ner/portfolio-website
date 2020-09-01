import React from "react";
import { svgArray } from "../../assets/svgs";
import "./skills.styles.scss";

const Skills = ({ scrollTop }) => {
  const allSkills = {
    coreFrontEnd: ["HTML5", "CSS3", "Javascript", "jQuery", "React"],
    reactEcosystem: ["REDUX", "React-Router", "Hooks", "Axios ", "Apollo"],
    styling: [
      "Bootstrap",
      "SASS",
      "Material UI",
      "Styled-Components",
      "Tailwind CSS",
    ],
    cloudServices: ["Firebase", "Heroku"],
    versionControl: ["Git", "GitHub"],
    packageManagers: ["NPM", "Yarn"],
    testing: ["JEST", "Enzyme"],
    dataFetching: ["REST APIs", "GraphQL"],
  };

  return (
    <section className="skills" id="skills">
      {/* <div className="scroll-btn" onClick={scrollTop}>
        Home
        <span>
          <i className="fas fa-chevron-up"></i>
        </span>
      </div> */}

      <h1>My tech-stack includes...</h1>

      <div className="svg-grid">
        {svgArray.map((item, index) => (
          <span key={index}>{item.svg}</span>
        ))}
      </div>
      <div className="skills-table">
        <p>
          <span className="skill-heading">Core Front-end</span>
          {allSkills.coreFrontEnd.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </p>
        <p>
          <span className="skill-heading">React</span>
          {allSkills.reactEcosystem.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </p>
        <p>
          <span className="skill-heading">Styling</span>
          {allSkills.styling.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </p>
        <p>
          <span className="skill-heading">Cloud Services</span>
          {allSkills.cloudServices.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </p>
        <p>
          <span className="skill-heading">Version Control</span>
          {allSkills.versionControl.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </p>
        <p>
          <span className="skill-heading">Package Managers</span>
          {allSkills.packageManagers.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </p>
        <p>
          <span className="skill-heading">Testing</span>
          {allSkills.testing.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </p>
        <p>
          <span className="skill-heading">Data Fetching</span>
          {allSkills.dataFetching.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default Skills;
