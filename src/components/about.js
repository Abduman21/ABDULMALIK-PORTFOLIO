import React from "react";
import "./style.css";
// import Logo2 from "../assets/logo2.png";
export const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h2> About Me</h2>
        <p>
          I'm a passionate full-stack developer with a love for creating digital
          experiences that matter.
        </p>
      </div>
      <div className="about-contents">
        <div className="about-me">
          
        </div>
        <div className="about-description">
          <h3>My Journey</h3>
          <p>
            I'm a dedicated software engineer with a passion for building
            innovative solutions that solve real-world problems. My journey in
            technology has been driven by curiosity and a desire to create
            meaningful digital experiences.
          </p>
          <p>
            With expertise spanning both front-end and back-end development, I
            enjoy the challenge of bringing ideas from conception to deployment.
            I believe in writing clean, maintainable code and staying current
            with the latest technologies and best practices.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open-source projects, or sharing knowledge with the
            developer community.
          </p>
        </div>
      </div>

      <div className="about-cards-container">
        <div className="about-cards">
          <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code w-6 h-6 text-blue-600"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div>
          <h3>Clean Code</h3>
          <p>
            I believe in writing maintainable, scalable code that stands the
            test of time.
          </p>
        </div>

        <div  className="about-cards">
          <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb w-6 h-6 text-blue-600"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg></div>
          <h3>Innovation</h3>
          <p>
            Always exploring new technologies and approaches to solve complex
            problems.
          </p>
        </div>

        <div   className="about-cards" >
          <div>
            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart w-6 h-6 text-blue-600">
             
           <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg></div>
         
          <h3>Passion</h3>
          <p>
            Genuinely love what I do and it shows in the quality of my work.
          </p>
        </div>

        <div   className="about-cards">
          <div
            
          ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-target w-6 h-6 text-blue-600"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg></div>
          <h3>Results</h3>
          <p>
            Focused on delivering solutions that make a real impact for users
            and businesses.
          </p>
        </div>
      </div>
    </div>
  );
};
