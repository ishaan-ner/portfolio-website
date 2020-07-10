import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="social-list">
        <li className="social-icon">
          <a
            href="https://github.com/ishaan-ner"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" style={{ color: "white" }}></i>
          </a>
        </li>
        <li className="social-icon">
          <a
            href="https://www.linkedin.com/in/ishaan-nerurkar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin" style={{ color: "#0077b5" }}></i>
          </a>
        </li>
        <li className="social-icon">
          <a href="mailto: ishaan.ner@gmail.com">
            <i class="fas fa-envelope-square" style={{ color: "#ffb3b3" }}></i>
          </a>
        </li>
      </ul>
      <ul className="nav-list">
        <li>
          <NavLink
            exact={true}
            to="/"
            activeStyle={{ fontWeight: "700", color: "white" }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            activeStyle={{ fontWeight: "700", color: "white" }}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            activeStyle={{ fontWeight: "700", color: "white" }}
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            activeStyle={{ fontWeight: "700", color: "white" }}
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <a
        href="https://drive.google.com/file/d/1U0Bm-XBccArtY8rAPMcRMF4QzlL6B_2G/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="btn">Download Resume</button>
      </a>
    </nav>
  );
};

export default Navbar;
