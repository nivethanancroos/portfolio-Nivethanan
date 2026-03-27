import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/60 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-semibold tracking-wide text-[#3e2f1c] cursor-pointer">
          Nive<span className="text-black">.</span>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-[#3e2f1c] text-[15px] font-medium">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase()}`}
              className="relative group transition duration-300"
            >
              {link}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#3e2f1c] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-5">
          {/* CV Button */}
          <button className="bg-[#3e2f1c] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-black transition duration-300 shadow-sm hover:shadow-md">
            Download CV
          </button>

          {/* Divider */}
          <div className="w-[1px] h-6 bg-gray-300"></div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-[#3e2f1c]">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-black hover:scale-110 transition duration-300 text-lg" />
            </a>

            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-black hover:scale-110 transition duration-300 text-lg" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {isOpen ? (
            <HiX
              onClick={() => setIsOpen(false)}
              className="text-3xl cursor-pointer"
            />
          ) : (
            <HiMenu
              onClick={() => setIsOpen(true)}
              className="text-3xl cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-[400px] py-6 opacity-100"
            : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-[#3e2f1c] text-lg font-medium hover:text-black transition"
            >
              {link}
            </a>
          ))}

          <button className="bg-[#3e2f1c] text-white px-6 py-2 rounded-full text-sm hover:bg-black transition">
            Download CV
          </button>

          <div className="flex gap-5 text-[#3e2f1c]">
            <FaLinkedin className="cursor-pointer hover:text-black transition" />
            <FaGithub className="cursor-pointer hover:text-black transition" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
