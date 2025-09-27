import React from "react";
import "./style.css";

export const Education = () => {
  return (
    <div className="education-total-container">
    <div className="education-content">
        <h2>Education and Experience</h2>
        <p>
          A blend of my academic achievements and professional experiences. Each step has shaped the skills I bring today
        </p>
      </div>
    <div className="education-container">

      
      <div className="education">


      <div className="education-outer-card">
        <h3>University</h3>
        <div className="education-inner-card">
          <h2>Bachelor of Science in Information systems</h2>
          <p>Haramaya university,Ethiopia</p>
          <p>2022-2025</p>
          <p>3.29/4.0</p>
        </div>
      </div>


      <div>
        <div className="education-outer-card">
          <h3>Preparatory</h3>
          <div className="education-inner-card">
            <h2>Addis Ketema Preparatory School,Ethiopia</h2>
            <p>Grade 11 and 12</p>
            <p>2020-2022</p>
            <p>488/700</p>
          </div>
        </div>
      </div>


       <div className="education-outer-card">
        <h3>Secondary</h3>
        <div className="education-inner-card">
          <h2>Kolfe Secondary School,Ethiopia</h2>
          <p>Grade 9 and 10</p>
          <p>2018-2020</p>
          <p>3.25/4.0</p>
        </div>
      </div>
      </div>




      <div className="experience">
 <div className="experience-outer-card">
        <h3>Unify technology</h3>
        <div className="experience-inner-card">
          <h2>Software development</h2>
          <p>Onsite</p>
          <p>Sep 16, 2025- present</p>
          <p>Ethiopia</p>
        </div>
      </div>

       <div className="experience-outer-card">
        <h3>Ministry of innovation and technologies</h3>
        <div className="experience-inner-card">
          <h2>Software development</h2>
          <p>Onsite,internship</p>
          <p>2024</p>
          <p>Ethiopia</p>
        </div>
      </div>



       <div className="experience-outer-card">
        <h3>Cepheus Tech</h3>
        <div className="experience-inner-card">
          <h2>AI software development bootcamp</h2>
          <p>Certefication</p>
          <p>july 8-21,2025</p>
          <p>Ethiopia</p>
        </div>
      </div>


      </div>
    </div>
    </div>
  );
};
