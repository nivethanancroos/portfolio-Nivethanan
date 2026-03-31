import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";

const ProjectCard = ({ image, title, desc, tech, link, github, details }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col border border-gray-100 h-full">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover transform group-hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-xl font-semibold text-[#2f2a26] mb-2 group-hover:text-[#d4a017] transition">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#2f2a26]/70 leading-relaxed mb-4 line-clamp-3">
          {desc}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((item, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-full border border-[#d4a017]/30 text-[#2f2a26] bg-[#d4a017]/10"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Push buttons to bottom */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col gap-3">
          {/* Top Row */}
          <div className="flex items-center justify-between">
            {/* GitHub */}
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#2f2a26] hover:text-[#d4a017] transition"
            >
              <FaGithub size={16} />
              Code
            </a>

            {/* Live Demo Button */}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-[#2f2a26] text-white hover:bg-[#d4a017] hover:text-[#2f2a26] transition"
            >
              Live Demo
              <FiExternalLink size={14} />
            </a>
          </div>

          {/* Details Button */}
          <a
            href={details}
            className="flex items-center justify-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-[#2f2a26]/20 hover:border-[#d4a017] hover:text-[#d4a017] transition"
          >
            View Details
            <FiArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
