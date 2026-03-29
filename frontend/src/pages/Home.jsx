import React from "react";

import Hero from "../components/Home/Hero";
import AboutMe from "../components/Home/AboutMe";
import Education from "../components/Home/Education";

const Home = () => {
  return (
    <div>
      <Hero />
      <Education />
      <AboutMe />
    </div>
  );
};

export default Home;
