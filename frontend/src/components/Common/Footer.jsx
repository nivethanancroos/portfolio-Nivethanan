import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111111] border-t border-white/10 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
        {/* Top */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Left */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              A.R Nivethanan Croos
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              Frontend Developer, UI/UX Designer & Entrepreneur passionate about
              creating elegant digital experiences with clean, modern designs.
            </p>

            <a
              href="mailto:nivethanancroos14@gmail.com"
              className="inline-flex items-center gap-2 mt-6 text-white hover:text-[#d4a017] transition duration-300"
            >
              <FaEnvelope />
              nivethanancroos14@gmail.com
            </a>
          </div>

          {/* Center */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              {["Home", "About", "Projects", "Skills", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-[#d4a017] transition duration-300 w-fit"
                  >
                    {item}
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Let's Connect
            </h3>

            <p className="text-gray-400 leading-7">
              Interested in working together or have a project in mind? Feel
              free to reach out.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="https://linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:bg-[#d4a017] hover:border-[#d4a017] hover:text-black hover:scale-110 transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://github.com/your-github"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:bg-[#d4a017] hover:border-[#d4a017] hover:text-black hover:scale-110 transition-all duration-300"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Anton Rex Nivethanan Croos.
          </p>

          <a
            href="#home"
            className="w-11 h-11 rounded-full bg-[#d4a017] hover:bg-[#b8860b] text-black flex items-center justify-center transition duration-300 hover:-translate-y-1"
          >
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
