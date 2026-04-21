import React from "react";

import Hero from "../components/Home/Hero";
import AboutMe from "../components/Home/AboutMe";
import Education from "../components/Home/Education";
import Projects from "../components/Home/Projects";
import Experience from "../components/Home/Experience";
import Contact from "../components/Home/Contact";
import Business from "../components/Home/Businesses";

const Home = () => {
  return (
    <div>
      <Hero />

      <div className="relative z-20 bg-white">
        <Experience />
        <Education />
        <Projects />
        <AboutMe />
        <Business />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
