import React, { useState } from "react";
import "./style.css";
import Logo1 from "../assets/logo1.png";
export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="header-container">
      <div className="logo">
        <a href="#home">
          <img src={Logo1} alt="Todo Logo" />
        </a>
      </div>

      <button
        className="menu-toggle"
        aria-label="Toggle navigation menu"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span className="menu-bar" />
        <span className="menu-bar" />
        <span className="menu-bar" />
      </button>

      <nav className={`nav-container ${menuOpen ? "open" : ""}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a href="#about" className="nav-link">
              About me
            </a>
          </li>

          <li className="nav-item">
            <a href="#skills" className="nav-link">
              Skills
            </a>
          </li>

          <li className="nav-item">
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </li>

          <li className="nav-item">
            <a href="#contact" className="nav-link">
              Contact me
            </a>
          </li>

          <li className="nav-item">
            <a href="#education" className="nav-link">
              Experiences
            </a>
          </li>
          <li className="nav-item">
            <a href="https://drive.google.com/file/d/1CUMLWyARQou61wVLm2q30CzYTPI0GYe-/view?usp=drivesdk">
              <button className="resume-button">Resume</button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
