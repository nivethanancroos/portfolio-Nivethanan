import React from "react";
import ProjectCard from "../Common/ProjectCard";
import LookupImage from "../../assets/Images/POST1.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Lookup Gift Store Website",
      desc: "A modern e-commerce platform for customized gifts with ordering and delivery features.",
      tech: ["React", "Tailwind", "Node.js"],
      image: LookupImage,
      link: "#",
      github: "#",
    },
    {
      id: 2,
      title: "University Assistant Chatbot",
      desc: "An AI-powered chatbot designed to assist students with academic and university-related queries.",
      tech: ["React", "Python", "NLP"],
      image: "https://via.placeholder.com/400x300",
      link: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Fire Detection System (ESP32)",
      desc: "Embedded system using sensors to detect fire hazards and trigger alerts in real-time.",
      tech: ["ESP32", "Arduino", "IoT"],
      image: "https://via.placeholder.com/400x300",
      link: "#",
      github: "#",
    },
    {
      id: 4,
      title: "Image Caption Generator",
      desc: "Deep learning model using CNN-LSTM to generate captions for images.",
      tech: ["Python", "TensorFlow", "Deep Learning"],
      image: "https://via.placeholder.com/400x300",
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
