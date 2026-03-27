import React from "react";
import "./Navbar.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="#home" className="active">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="nav-right">
        <button className="cv-btn">Download CV</button>
        <FaLinkedin className="icon" />
        <FaGithub className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;
