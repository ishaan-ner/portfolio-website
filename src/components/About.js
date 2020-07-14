import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about">
      <p>Hi, I'm</p>
      <h1>Ishaan Nerurkar</h1>
      <h2>A front-end web developer</h2>
      <p>
        I build responsive, dynamic user interfaces for Web Apps. I love writing
        clean, scalable and efficient code to bring designs and wire-frames to
        life.
      </p>
      <Link to="/projects">
        <button className="btn">Projects</button>
      </Link>
    </section>
  );
};

export default About;
