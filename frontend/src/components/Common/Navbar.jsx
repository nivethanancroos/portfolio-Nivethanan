import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <div className="fixed top-5 left-0 w-full flex justify-center z-50">
      <nav
        className={`relative w-full px-12 h-16 flex items-center justify-between transition-all duration-300
               backdrop-blur-xl bg-white/70 border border-[#d4a017]/20 rounded-full shadow-lg px-0
               md:bg-transparent md:backdrop-blur-none md:border-none md:shadow-none`}
      >
        {/* MOBILE ONLY LOGO */}
        <div className="md:hidden">
          <h1 className="text-xl font-bold text-[#2f2a26] tracking-tight">
            Nive<span className="text-[#d4a017]">.</span>
          </h1>
        </div>

        {/* DESKTOP LEFT - Nav Links (Now appears on transparent background) */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10 text-sm font-semibold text-[#2f2a26]/80">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase()}`}
              className="relative group hover:text-[#d4a017] transition-colors"
            >
              {link}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#d4a017] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* DESKTOP RIGHT - Icons + CV */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <div className="flex items-center gap-4 border-r border-[#2f2a26]/10 pr-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-lg text-[#2f2a26] hover:scale-110 hover:text-[#d4a017] transition"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-lg text-[#2f2a26] hover:scale-110 hover:text-[#d4a017] transition"
            >
              <FaGithub size={22} />
            </a>
          </div>

          <a
            href="/cv.pdf"
            download
            className="flex items-center gap-2 bg-[#2f2a26] text-white text-xs lg:text-sm px-5 py-2.5 rounded-full hover:bg-[#d4a017] hover:text-[#2f2a26] transition-all duration-300 shadow-md font-bold whitespace-nowrap"
          >
            <FiDownload className="text-base" />
            Download CV
          </a>
        </div>

        {/* MOBILE VIEW - Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-[#2f2a26] p-2 hover:text-[#d4a017] transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* MOBILE DROPDOWN MENU - Keeps the background styles */}
      <div
        className={`absolute top-20 left-1/2 -translate-x-1/2 w-[95%] max-w-sm bg-white/95 backdrop-blur-2xl border border-[#d4a017]/30 rounded-3xl shadow-2xl py-8 px-6 flex flex-col items-center gap-6 md:hidden transition-all duration-300 origin-top ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <h1 className="text-2xl font-bold text-[#2f2a26]">
          Nive<span className="text-[#d4a017]">.</span>
        </h1>

        <div className="h-[1px] w-12 bg-[#d4a017]/40"></div>

        <div className="flex flex-col items-center gap-5 w-full">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-[#2f2a26] font-bold text-xl hover:text-[#d4a017] transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="h-[1px] w-full bg-[#2f2a26]/10"></div>

        <div className="flex items-center gap-8">
          <a
            href="#"
            className="text-2xl text-[#2f2a26] hover:text-[#d4a017] transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="text-2xl text-[#2f2a26] hover:text-[#d4a017] transition-colors"
          >
            <FaGithub />
          </a>
        </div>

        <a
          href="/cv.pdf"
          download
          className="w-full flex justify-center items-center gap-3 bg-[#d4a017] text-[#2f2a26] py-4 rounded-2xl text-base font-extrabold shadow-lg active:scale-95 transition-transform"
        >
          <FiDownload className="text-xl" />
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Navbar;
