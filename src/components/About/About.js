import React from "react";
import { Link } from "react-router-dom";
import "./about.styles.scss";

const About = ({ scrollBottom }) => {
  return (
    <section className="about" id="about">
      <div className="about-me">
        <h1>Hi, I'm</h1>
        <h1>Ishaan Nerurkar</h1>
        <h1>A front-end developer</h1>
        <p>
          I build responsive, dynamic user interfaces for Web Apps. I write
          test-driven, scalable and efficient code in the React and NodeJS
          environment.
        </p>
      </div>
      <div className="about-buttons">
        <Link to="/projects">
          <button className="about-btn">
            <i className="fas fa-laptop-code"></i>Projects
          </button>
        </Link>
        <a
          href="https://drive.google.com/file/d/1XB-OzpQ4CIfPdoKtdojDx4DbrtsA3HiB/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="about-btn">
            <i className="far fa-file"></i> Resume
          </button>
        </a>
      </div>
      {/* <div className="scroll-btn" onClick={scrollBottom}>
        Skills
        <span>
          <i className="fas fa-chevron-down"></i>
        </span>
      </div> */}
    </section>
  );
};

export default About;
