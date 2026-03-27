import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const navLinks = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <div className="fixed top-5 left-0 w-full flex justify-center z-50">
      <nav className="relative w-[92%] max-w-7xl bg-[#D89A6F] rounded-full px-10 py-4 flex items-center shadow-md">
        {/* LEFT - Logo */}
        <h1 className="text-2xl font-semibold text-black tracking-wide">
          Nive
        </h1>

        {/* CENTER - Links (perfectly centered) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex gap-12 text-[15px] font-medium text-black">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase()}`}
              className="hover:opacity-70 transition duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* RIGHT - Icons */}
        <div className="ml-auto flex items-center gap-4 text-black text-lg">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:scale-110 transition duration-300 cursor-pointer" />
          </a>

          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub className="hover:scale-110 transition duration-300 cursor-pointer" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
