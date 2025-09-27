import React from "react";
import "./style.css";
import Todolist from "../assets/todolist.png";
import Jobsearch from "../assets/jobsearch.png";
import Crime1 from "../assets/crime1.png";
export const Feature = () => {
  return (
    <div className="feature-container">
      <div className="feature-content">
        <h2>Featured Projects</h2>
        <p>
          Here are some of my recent projects that showcase my skills and
          passion for development.
        </p>
      </div>
      <div className="what">
        <div className="feature-container-card">
          <div className="feature-cards">
            <div className="feature-img">
              <img src={Todolist} alt="Todo pic" loading="lazy" />
            </div>
            <h3>Todo List App</h3>
            <p>
              A modern, responsive todo application with drag-and-drop
              functionality
            </p>
            <div className="project-buttons">
              <div>
                <a href="https://github.com/Abduman21/todo-list-app-abduman">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-github w-6 h-6 text-blue-600"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.58 2 12.25c0 4.5 2.87 8.31 6.84 9.66.5.09.68-.22.68-.48 
           0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 
           1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 
           0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.75c.85 0 
           1.71.12 2.5.35 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.71 1.03 1.62 1.03 2.74 
           0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.91 0 1.38-.01 2.49-.01 2.83 
           0 .26.18.57.69.47A10.24 10.24 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"
                    />
                  </svg>
                </a>
                <a href="https://todo-list-app-abduman.vercel.app/">
                  <button>preview</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="feature-container-card">
          <div className="feature-cards">
            <div className="feature-img">
              <img src={Jobsearch} alt=" job search" loading="lazy" />
            </div>
            <h3>Ethiopian Job Search Project</h3>
            <p>
              A comprehensive job search platform designed specifically for the
              Ethiopian job market and featuring advanced search
            </p>
            <div className="project-buttons">
              <div>
                <a href="https://github.com/Abduman21/ethio-job-search-app">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-github w-6 h-6 text-blue-600"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.58 2 12.25c0 4.5 2.87 8.31 6.84 9.66.5.09.68-.22.68-.48 
           0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 
           1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 
           0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.75c.85 0 
           1.71.12 2.5.35 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.71 1.03 1.62 1.03 2.74 
           0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.91 0 1.38-.01 2.49-.01 2.83 
           0 .26.18.57.69.47A10.24 10.24 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"
                    />
                  </svg>
                </a>
                <a href="https://todo-list-app-abduman.vercel.app/">
                  <button>preview</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="feature-container-card">
          <div className="feature-cards">
            <div className="feature-img">
              <img src={Crime1} alt="crime mgmt" loading="lazy" />
            </div>
            <h3>Crime Management System</h3>
            <p>
              A comprehensive system for law enforcement to manage crime
              reports, track investigations, and generate reports
            </p>
            <div className="project-buttons">
              <div>
                <a href="https://github.com/Abduman21/crime-management-system">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-github w-6 h-6 text-blue-600"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.58 2 12.25c0 4.5 2.87 8.31 6.84 9.66.5.09.68-.22.68-.48 
           0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 
           1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 
           0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.75c.85 0 
           1.71.12 2.5.35 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.71 1.03 1.62 1.03 2.74 
           0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.91 0 1.38-.01 2.49-.01 2.83 
           0 .26.18.57.69.47A10.24 10.24 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"
                    />
                  </svg>
                </a>
              </div>
              <div>
                <a href="https://crimeme-management-system.lovable.app/">
                  <button>preview</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
