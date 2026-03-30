import React from "react";

const ProjectCard = ({ image, title, desc, tech, link, github }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-500 overflow-hidden flex flex-col border border-gray-100">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover transform group-hover:scale-110 transition duration-500"
        />

        {/* Overlay Accent */}
        <div className="absolute inset-0 bg-[#2f2a26]/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-xl font-semibold text-[#2f2a26] mb-2 group-hover:text-[#d4a017] transition duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#2f2a26]/70 leading-relaxed mb-4">{desc}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-full border border-[#d4a017]/40 text-[#2f2a26] bg-[#d4a017]/10"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-grow"></div>

        {/* Buttons */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          {/* Live */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#d4a017] hover:underline"
          >
            Live Demo →
          </a>

          {/* GitHub */}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#2f2a26] hover:text-[#d4a017] transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
