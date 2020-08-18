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
          {/* <NavLink
            to="/projects"
            activeStyle={{ fontWeight: "700", color: " #39b08d" }}
          >
            Projects
          </NavLink> */}
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
            <p className="icon-name">GitHub</p>
          </a>
        </li>
        <li className="social-icon">
          <a
            href="https://www.linkedin.com/in/ishaan-nerurkar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
            <p className="icon-name">LinkedIn</p>
          </a>
        </li>
        <li className="social-icon">
          <a href="mailto: ishaan.ner@gmail.com">
            <i className="fas fa-envelope-square"></i>
            <p className="icon-name">Email</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
