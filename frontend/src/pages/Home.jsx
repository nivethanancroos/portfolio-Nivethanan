import React from "react";

import Hero from "../components/Home/Hero";
import AboutMe from "../components/Home/AboutMe";
import Education from "../components/Home/Education";
import Projects from "../components/Home/Projects";

const Home = () => {
  return (
    <div>
      <Hero />

      {/* This section scrolls OVER hero */}
      <div className="relative z-20 bg-white">
        <Education />
        <Projects />
        <AboutMe />
      </div>
    </div>
  );
};

export default Home;
