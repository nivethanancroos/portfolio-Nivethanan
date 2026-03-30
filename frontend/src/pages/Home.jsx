import React from "react";

import Hero from "../components/Home/Hero";
import AboutMe from "../components/Home/AboutMe";
import Education from "../components/Home/Education";
import Projects from "../components/Home/Projects";

const Home = () => {
  return (
    <div>
      <Hero />
      <Education />
      <Projects />
      <AboutMe />
    </div>
  );
};

export default Home;
