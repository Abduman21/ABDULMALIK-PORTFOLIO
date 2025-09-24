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
      <Hero />
      <About />
      <Skills />
      <Feature />
      <Education />
      <Getintouch />
      <Testimonial />
      <Footer />
      
    </>
  );
};
