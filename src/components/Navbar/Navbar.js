import React from "react";
import "./navbar.styles.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <NavLink
            exact={true}
            to="/"
            activeStyle={{ fontWeight: "700", color: " #39b08d" }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            activeStyle={{ fontWeight: "700", color: " #39b08d" }}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <a href="#skills"> Skills</a>
        </li>
      </ul>
      <ul className="social-list">
        <li className="social-icon">
          <a
            href="https://github.com/ishaan-ner"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li className="social-icon">
          <a
            href="https://www.linkedin.com/in/ishaan-nerurkar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="social-icon">
          <a href="mailto: ishaan.ner@gmail.com">
            <i className="fas fa-envelope-square"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
