import React from "react";
import "./style.css";

export const Skills = () => {
 const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 80},
      { name: "JavaScript", level: 90 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Next.js", level: 50 },
      { name: "Vue.js", level: 50 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 80 },
      { name: "Java", level: 50 },
      { name: "Express.js", level: 70 },
      { name: "Django", level: 45 },
      { name: "REST APIs", level: 80 },
      
      
    ],
  },
  {
    title: "Database and tools",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 70 },
      { name: "SQL", level: 70 },
       { name: "Git and github", level: 89 },
       { name: "word press", level: 90 },
    ],
  },
 
];
  return (
    <div className="skills-container">
      <div className="skills-content">
        <h2>Skills & Technologies</h2>
        <p>Here are the technologies and tools I use to bring ideas to life.</p>
      </div>
       <div className="card-container">
      {categories.map((category, index) => (
        <div key={index} className="card">
          <h2 className="card-title">{category.title}</h2>
          <div className="skills">
            {category.skills.map((skill, idx) => (
              <div key={idx} className="skill">
                <div className="skill-header">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};
