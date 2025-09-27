import React from "react";
import "./style.css";

export const Hero = () => {
  return (
    
      <div className="hero-container">
      <div className="hero-header">
        <h1>Hi, I'm < span 
            style={{
              background: "linear-gradient(to right, #155aedff, #17368eff)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
           > Abdulmalik Muze</span></h1>
        <p>
          Full-Stack Developer & Software Engineer passionate about creating
          innovative solutions and bringing ideas to life through clean,
          efficient code.
        </p>
      </div>
      <div className="contact-list">
        <span><a href="https://github.com/Abduman21" target="_blank" rel="noreferrer noopener" aria-label="GitHub"></a></span>
        <span><a href="https://www.linkedin.com/in/abdulmalik-muze-819951319" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn"></a></span>
        <span><a href="https://www.instagram.com/abdulmalikmuze/" target="_blank" rel="noreferrer noopener" aria-label="Instagram"></a></span>
      </div>
    </div>
      
    
  );
};
