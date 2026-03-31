import React, { useState } from "react";
import ProjectCard from "../Common/ProjectCard";
import LookupImage from "../../assets/Images/lookup-portfolio2.jpg";
import IMS from "../../assets/Images/IMS.png";
import Grazartgallery from "../../assets/Images/graz-gallery-art-portfolio.jpg";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      category: "Web Apps",
      title: "Inventory Management System",
      desc: (
        <>
          A full-stack web-based Inventory Management System developed for the{" "}
          <strong className="text-[#585858]">University of Jaffna</strong>,
          supporting role-based access, item tracking, issue/return management,
          and reporting across multiple locations.
        </>
      ),
      tech: [
        "React",
        "Tailwind CSS",
        "Spring Boot",
        "Spring Security",
        "PostgreSQL",
        "AWS",
      ],
      image: IMS,
      link: "#",
      github: "#",
    },
    {
      id: 2,
      category: "Web Apps",
      title: "Lookup Gift Store Website",
      desc: "Developed a full-stack showcase web application for Lookup using React, Tailwind CSS, Node.js, Express, and MongoDB, with backend-driven gallery management.",
      tech: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Cloudinary",
      ],
      image: LookupImage,
      link: "#",
      github: "#",
    },
    {
      id: 3,
      category: "Web Apps",
      title: "Graz Art Gallery Website",
      desc: "Developed a full-stack e-commerce art gallery website with dynamic artwork display, product showcasing, and backend-driven gallery and product management.",
      tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      image: Grazartgallery,
      link: "#",
      github: "#",
    },
    {
      id: 4,
      category: "AI/ML",
      title: "Image Caption Generator",
      desc: "Deep learning model using CNN-LSTM to generate captions for images.",
      tech: ["Python", "TensorFlow", "Deep Learning"],
      image: "https://via.placeholder.com/400x300",
      link: "#",
      github: "#",
    },
  ];

  const categories = ["All", "Web Apps", "AI/ML"];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-6 px-6 bg-[#fcfaf8]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12">
          <div className="text-center max-w-3xl mx-auto mb-4 px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#2f2a26] leading-tight tracking-tight">
              Project <span className="text-[#d4a017]">Highlights</span>
            </h2>

            <p className="mt-5 text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              A curated showcase of my work — blending design, engineering, and
              problem-solving to build meaningful digital experiences.
            </p>

            <div className="mt-3 flex justify-center">
              <div className="h-1.5 w-16 bg-[#d4a017] rounded-full"></div>
            </div>
          </div>

          {/* Categorization Toggle Button Group */}
          <div className="flex gap-2 p-1 bg-gray-100 rounded-full w-fit mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  filter === cat
                    ? "bg-gradient-to-r from-[#d4a017] to-[#d4a017] text-white shadow-sm"
                    : "text-gray-600 hover:text-[#2f2a26] hover:bg-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with Animation Key */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="animate-in fade-in zoom-in duration-500 group relative"
            >
              {/* Optional Category Badge on UI */}
              <span className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm text-[#2f2a26] text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full border border-[#d4a017]/30">
                {project.category}
              </span>

              <div className="transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl">
                <ProjectCard
                  {...project}
                  className="h-full border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-[#2f2a26]/50 italic">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
