import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-16 py-6 bg-[#f4f2f0]">
      {/* Left Links */}
      <div className="flex gap-8 text-[#5a4634] text-[15px]">
        <a href="#home" className="border-b-2 border-[#5a4634] pb-1">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <button className="bg-[#5a4634] text-white px-4 py-1.5 rounded-full text-sm">
          Download CV
        </button>

        <FaLinkedin className="text-[#5a4634] text-lg cursor-pointer" />
        <FaGithub className="text-[#5a4634] text-lg cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
