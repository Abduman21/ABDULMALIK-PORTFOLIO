import React from "react";
import "./style.css";
import salah from "../assets/salah.png";
import salim from "../assets/salim.png";
import umer from "../assets/umer.png";

const testimonials = [
  {
    name: "Umer",
    role: "Graphic designer",
    company: "Unify Technology.",
    text: "Abdulmalik is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.",
    image: umer, // Use imported image
  },
  {
    name: "salah abdu",
    role: "Senior Developer",
    company: "Unify Technology.",
    text: "Working with Abdulmalik was a pleasure. He brought fresh ideas to our project and his technical expertise helped us overcome several challenges.",
    image: salah,
  },
  {
    name: "Salim Ebrahim",
    role: "UX/UI Designer",
    company: "Unify Technology.",
    text: "Abdulmalik has excellent communication skills and was able to perfectly implement our design requirements. The final product exceeded our expectations.",
    image: salim,
  },
];

export const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <div className="testimonial-header">
        <h2>What People Say</h2>
        <p>
          Here's what clients and colleagues have said about working with me.
        </p>
      </div>
      <div className="testimonial-wrapper">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <span className="quote-icon">&#10077;</span>
            <p className="testimonial-text">{t.text}</p>
            <div className="stars">★★★★★</div>
            <div className="testimonial-author">
              <img
                src={t.image}
                alt={t.name}
                className="author-img"
                loading="lazy"
              />
              <div>
                <h4 className="author-name">{t.name}</h4>
                <p className="author-role">{t.role}</p>
                <p className="author-company">{t.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
