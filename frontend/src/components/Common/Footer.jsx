import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2f2a26] text-white px-6 md:px-12 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">Anton Rex Nivethanan</h2>
          <p className="text-sm text-gray-300 mt-1">
            Frontend Developer • UI/UX Designer • Entrepreneur
          </p>
        </div>

        {/* Center - Navigation */}
        <div className="flex gap-6 text-sm font-medium">
          <a href="#home" className="hover:text-purple-400 transition">
            Home
          </a>
          <a href="#about" className="hover:text-purple-400 transition">
            About
          </a>
          <a href="#projects" className="hover:text-purple-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-purple-400 transition">
            Contact
          </a>
        </div>

        {/* Right - Socials */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com/lookup.lk"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 border-t border-gray-600 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Anton Rex Nivethanan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
