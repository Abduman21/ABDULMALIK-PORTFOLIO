import React from "react";
import { Header } from "./header.js";
import { Hero } from "./hero.js";
import { About } from "./about.js";
import { Skills } from "./skills.js";
import { Feature } from "./feature.js";
import { Education } from "./education.js";
import { Getintouch } from "./getintouch.js";
import { Testimonial } from "./testimonial.js";
import { Footer} from "./footer.js";
import "./style.css";

export const Home = () => {
  return (
    <>
      <Header />
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Feature /></div>
      <div id="education"><Education /></div>
      <div id="contact"><Getintouch /></div>
      <div id="testimonials"><Testimonial /></div>
      <div id="footer"><Footer /></div>
      
    </>
  );
};
