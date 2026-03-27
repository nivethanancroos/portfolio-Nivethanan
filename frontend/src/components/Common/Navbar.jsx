import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <div className="fixed top-5 left-0 w-full flex justify-center z-50 px-4">
      <nav className="relative w-full max-w-7xl backdrop-blur-xl bg-white/70 border border-white/30 rounded-full px-8 h-16 flex items-center justify-between shadow-lg">
        {/* LEFT - Logo (Improved) */}
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight cursor-pointer">
          Nive<span className="text-black">.</span>
        </h1>

        {/* CENTER - Links */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-10 text-sm font-medium text-gray-700">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase()}`}
              className="relative group"
            >
              {link}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* RIGHT - Icons + CV */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-lg text-gray-700 hover:scale-110 hover:text-black transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-lg text-gray-700 hover:scale-110 hover:text-black transition"
          >
            <FaGithub />
          </a>

          <a
            href="/cv.pdf"
            download
            className="flex items-center gap-2 bg-black text-white text-sm px-5 py-2 rounded-full hover:bg-gray-800 transition shadow-md"
          >
            <FiDownload className="text-base" />
            CV
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden text-2xl text-gray-800 cursor-pointer">
          {isOpen ? (
            <HiX onClick={() => setIsOpen(false)} />
          ) : (
            <HiMenu onClick={() => setIsOpen(true)} />
          )}
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="absolute top-20 w-[92%] max-w-md bg-white/95 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-xl py-6 flex flex-col items-center gap-5 md:hidden animate-fadeIn">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 text-base hover:text-black transition"
            >
              {link}
            </a>
          ))}

          <div className="flex gap-6 text-xl mt-2">
            <FaLinkedin />
            <FaGithub />
          </div>

          <a
            href="/cv.pdf"
            download
            className="mt-2 flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full text-sm"
          >
            <FiDownload />
            Download CV
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
