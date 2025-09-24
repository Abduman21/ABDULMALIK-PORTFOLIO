import React from "react";
import "./style.css";
import Logo1 from "../assets/logo1.png";
export const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <a href="./home" >
            <img src={Logo1} alt="Todo Logo" />
            </a>
      </div>

      <nav className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="./" className="nav-link">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a href="./about.js" className="nav-link">
              About me
            </a>
          </li>

          <li className="nav-item">
            <a href="./skills.js" className="nav-link">
              Skills
            </a>
          </li>

          <li className="nav-item">
            <a href="./project.js" className="nav-link">
              Projects
            </a>
          </li>

          <li className="nav-item">
            <a href="./getintouch.js" className="nav-link">
              Contact me
            </a>
          </li>

          <li className="nav-item">
            <a href="./education.js" className="nav-link">
              Experiences
            </a>
          </li>
          <li className="nav-item">
            <a href="./resume.js" >
              <button  className="resume-button">Resume</button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
