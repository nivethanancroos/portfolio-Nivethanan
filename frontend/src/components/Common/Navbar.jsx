import React, { useState, useEffect, useRef } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const menuRef = useRef(null);
  const lastScrollY = useRef(0);

  const navLinks = ["Home", "About", "Projects", "Skills", "Contact"];

  //  Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  //  Close on ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  //  Prevent scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  //  Hide/show navbar on scroll (MOBILE ONLY)
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) return; // only mobile

      const currentScrollY = window.scrollY;

      // prevent tiny scroll jitter
      if (Math.abs(currentScrollY - lastScrollY.current) < 5) return;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowNav(false); // scroll down → hide
      } else {
        setShowNav(true); // scroll up → show
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed left-0 w-full flex justify-center z-50 transition-transform duration-300
      ${showNav ? "translate-y-0" : "-translate-y-full"}
      top-4 md:top-5`}
    >
      {/* NAVBAR */}
      <nav
        ref={menuRef}
        className={`relative w-[92%] md:w-full px-6 md:px-12 h-14 md:h-16 flex items-center justify-between transition-all duration-300
        backdrop-blur-xl bg-white/70 border border-[#d4a017]/20 rounded-full shadow-lg 
        pt-1 md:pt-0
        md:bg-transparent md:backdrop-blur-none md:border-none md:shadow-none`}
      >
        {/* MOBILE LOGO */}
        <div className="md:hidden">
          <h1 className="text-lg font-bold text-[#2f2a26] tracking-tight">
            Nive<span className="text-[#d4a017]">.</span>
          </h1>
        </div>

        {/* DESKTOP LEFT - Refined UX Navigation */}
        <div
          className="hidden md:flex items-center gap-1 p-1.5
  backdrop-blur-2xl bg-white/40 border border-white/40 
  rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
        >
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase()}`}
              className="relative px-4 py-2 text-[13px] font-medium tracking-wide uppercase text-[#2f2a26]/70 
      transition-all duration-300 ease-in-out rounded-full group hover:text-[#2f2a26]"
            >
              {/* The Text Label */}
              <span className="relative z-10 transition-transform duration-300 group-hover:scale-105 inline-block">
                {link}
              </span>

              {/* Modern Hover Interaction: Soft Capsule Background */}
              <span
                className="absolute inset-0 z-0 bg-white/60 rounded-full scale-90 opacity-0 
        transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100 shadow-sm"
              ></span>

              {/* The "Active/Focus" Indicator: Minimalist Dot */}
              <span
                className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#d4a017] 
        rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bottom-1"
              ></span>
            </a>
          ))}
        </div>

        {/* DESKTOP RIGHT */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <div className="flex items-center gap-4 border-r border-[#2f2a26]/10 pr-4">
            <a
              href="https://www.linkedin.com/in/nivethanan-croos/"
              target="_blank"
              rel="noreferrer"
              className="text-lg text-[#2f2a26] hover:scale-110 hover:text-[#d4a017] transition"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://github.com/nivethanancroos"
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
            className="flex items-center gap-2 bg-[#2f2a26] text-white text-xs lg:text-sm px-5 py-2.5 rounded-full hover:bg-[#d4a017]  transition-all duration-300 shadow-md font-bold whitespace-nowrap"
          >
            <FiDownload className="text-base" />
            Download CV
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl text-[#2f2a26] p-2 hover:text-[#d4a017] transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* MOBILE DROPDOWN */}
      <div
        className={`absolute top-16 left-1/2 -translate-x-1/2 w-[92%] max-w-xs bg-white/95 backdrop-blur-2xl border border-[#d4a017]/30 rounded-2xl shadow-2xl py-6 px-5 flex flex-col items-center gap-5 md:hidden transition-all duration-300 origin-top ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <h1 className="text-xl font-bold text-[#2f2a26]">
          Nive<span className="text-[#d4a017]">.</span>
        </h1>

        <div className="h-px w-10 bg-[#d4a017]/40"></div>

        <div className="flex flex-col items-center gap-4 w-full">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-[#2f2a26] font-bold text-lg hover:text-[#d4a017] transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="h-px w-full bg-[#2f2a26]/10"></div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-xl hover:text-[#d4a017]">
            <FaLinkedin />
          </a>
          <a href="#" className="text-xl hover:text-[#d4a017]">
            <FaGithub />
          </a>
        </div>

        <a
          href="/cv.pdf"
          download
          className="w-full flex justify-center items-center gap-2 bg-[#d4a017] text-[#2f2a26] py-3 rounded-xl text-sm font-bold shadow-md active:scale-95"
        >
          <FiDownload />
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Navbar;
