import React from "react";
import ProjectCard from "../Common/ProjectCard";
import LookupImage from "../../assets/Images/lookup-portfolio2.jpg";
import IMS from "../../assets/Images/IMS.png";
import Grazartgallery from "../../assets/Images/graz-gallery-art-portfolio.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Inventory Management System ",
      desc: (
        <>
          A full-stack web-based Inventory Management System developed for the{" "}
          <strong>University of Jaffna</strong>, supporting role-based access,
          item tracking, issue/return management, and reporting across multiple
          locations.
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
      title: "Graz Art Gallery Website",
      desc: "Developed a full-stack e-commerce art gallery website with dynamic artwork display, product showcasing, and backend-driven gallery and product management.",
      tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      image: Grazartgallery,
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
