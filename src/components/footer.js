import React from "react";
import "./style.css";

export const Footer = () => {
  return (
  
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Abdulmalik Muze</h3>
          <p>Full-Stack Developer passionate about creating innovative solutions and bringing ideas to life through clean, efficient code. Always learning and growing in the world of technology.</p>
        </div>
        
        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </div>
        
        <div className="footer-section services">
          <h4>Services</h4>
          <ul>
            <li>Web Development</li>
            <li>Frontend Development</li>
            <li>Backend Development</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 Abdulmalik Muze. All rights reserved.</p>
      </div>
    </footer>
  );
};
 
