import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <div className="fixed top-4 left-0 w-full flex justify-center z-50">
      <nav className="relative w-[92%] max-w-7xl backdrop-blur-md bg-white/70 border border-white/30 rounded-full px-8 py-3 flex items-center shadow-lg">
        {/* LEFT - Logo */}
        <h1 className="text-xl md:text-2xl font-semibold text-gray-800 tracking-wide cursor-pointer">
          Nive
        </h1>

        {/* CENTER - Links */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex gap-10 text-[15px] font-medium text-gray-700">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase()}`}
              className="relative group"
            >
              {link}
              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* RIGHT - Icons */}
        <div className="ml-auto hidden md:flex items-center gap-5 text-gray-700 text-lg">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition duration-300"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition duration-300"
            title="GitHub"
          >
            <FaGithub />
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="ml-auto md:hidden text-2xl text-gray-800 cursor-pointer">
          {isOpen ? (
            <HiX onClick={() => setIsOpen(false)} />
          ) : (
            <HiMenu onClick={() => setIsOpen(true)} />
          )}
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="absolute top-20 w-[90%] bg-white rounded-2xl shadow-lg py-6 flex flex-col items-center gap-6 md:hidden">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 text-lg hover:text-black transition"
            >
              {link}
            </a>
          ))}

          <div className="flex gap-6 text-xl mt-4">
            <FaLinkedin />
            <FaGithub />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
