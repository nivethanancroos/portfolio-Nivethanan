import React, { useState } from "react";
import ProjectCard from "../Common/ProjectCard";
import LookupImage from "../../assets/Images/lookup-portfolio2.jpg";
import IMS from "../../assets/Images/IMS.png";
import IMSUIUX from "../../assets/Images/IMSUIUX.png";
import Grazartgallery from "../../assets/Images/graz-gallery-art-portfolio.jpg";
import GZUIUX from "../../assets/Images/GZUIUX.png";
import Amazly from "../../assets/Images/AmazlyGifts.png";
import AmazlyGiftsUI from "../../assets/Images/AmazlyGiftsUI.png";

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
      link: "https://inventrax.sytes.net/",
      github: "https://github.com/karenthiran/Inventory-Management-System.git",
      details: "",
    },
    {
      id: 2,
      category: "Web Apps",
      title: "Lookup Gift Store Website",
      desc: (
        <>
          Developed a full-stack showcase web application for{" "}
          <strong className="text-[#585858]">Lookup</strong> using React,
          Tailwind CSS, Node.js, Express, and MongoDB, with backend-driven
          gallery management.
        </>
      ),
      tech: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Cloudinary",
      ],
      image: LookupImage,
      link: "https://www.lookuplk.com/",
      github: "https://github.com/nivethanancroos/lookup-website.git",
      details: "",
    },
    {
      id: 3,
      category: "Web Apps",
      title: "Graz Art Gallery Website",
      desc: "A full-stack e-commerce art gallery website with dynamic artwork display, product showcasing, and backend-driven gallery and product management.",
      tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      image: Grazartgallery,
      link: "https://www.grazartgallery.com/",
      github: "https://github.com/nivethanancroos/lookup-website.git",
      details: "",
    },
    {
      id: 4,
      category: "Web Apps",
      title: "Amazly Gifts Website",
      desc: (
        <>
          A full-stack gift store web application for{" "}
          <strong className="text-[#585858]">Amazly Gifts</strong> using React,
          Tailwind CSS, Node.js, Express, and MongoDB, with backend-driven
          gallery and product management.
        </>
      ),
      tech: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Cloudinary",
      ],
      image: Amazly,
      link: "https://testsite.myftp.org/",
      github: "https://github.com/nivethanancroos/AmazlyGifts_ECommerce.git",
      details:
        "Designed and developed Amazly Gifts, a modern full-stack gift store web application focused on personalized gifting experiences. Built with React and Tailwind CSS for a responsive and visually engaging frontend, and powered by Node.js, Express.js, and MongoDB for efficient backend operations. Integrated Cloudinary for optimized media handling and implemented dynamic product showcasing with scalable backend architecture.",
    },
    {
      id: 5,
      category: "UI/UX",
      title: "Inventory Management System UI/UX Design",
      desc: (
        <>
          Designed an intuitive and user-friendly interface for the{" "}
          <strong className="text-[#585858]">
            Inventory Management System
          </strong>
          , focusing on improving usability, workflow efficiency, and visual
          clarity. Created wireframes, prototypes, and high-fidelity designs
          using <strong className="text-[#585858]">Visily</strong> and enhanced
          visuals with{" "}
          <strong className="text-[#585858]">Adobe Photoshop</strong>.
        </>
      ),
      tech: ["Visily", "Adobe Photoshop", "Adobe Illustrator"],
      image: IMSUIUX,
      link: "https://app.visily.ai/projects/e40fae56-d69b-4ac1-bf4e-00dd70f954db/boards/2496195",
      github: "https://github.com/karenthiran/Inventory-Management-System.git",
      details: "",
    },
    {
      id: 6,
      category: "UI/UX",
      title: "Graz Art Gallery UI/UX Design",
      desc: (
        <>
          Designed a visually engaging and user-centered interface for the{" "}
          <strong className="text-[#585858]">Graz Art Gallery</strong> website,
          focusing on seamless artwork browsing, intuitive navigation, and an
          elegant shopping experience. Created wireframes and high-fidelity
          designs to enhance user interaction and visual storytelling.
        </>
      ),
      tech: ["Visily", "Adobe Photoshop", "Adobe Illustrator"],
      image: AmazlyGiftsUI,
      link: "https://www.grazartgallery.com/",
      github: "https://github.com/nivethanancroos/lookup-website.git",
      details: "",
    },
    {
      id: 7,
      category: "UI/UX",
      title: "Amazly Gifts UI/UX Design",
      desc: (
        <>
          Designed a modern and user-centered interface for{" "}
          <strong className="text-[#585858]">Amazly Gifts</strong>, focusing on
          seamless product discovery, personalized gifting experience, and
          smooth navigation. Created wireframes and high-fidelity designs to
          enhance user engagement and visual appeal.
        </>
      ),
      tech: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
      image: GZUIUX,
      link: "https://testsite.myftp.org/",
      github: "https://github.com/nivethanancroos/AmazlyGifts_ECommerce.git",
      details:
        "Crafted the UI/UX design for Amazly Gifts with a focus on intuitive user journeys and visually appealing layouts. Designed responsive wireframes and high-fidelity prototypes to ensure a seamless browsing and shopping experience. Emphasized clean design, consistent branding, and user engagement to create a modern digital gifting platform.",
    },
    {
      id: 8,
      category: "AI/ML",
      title: "Image Caption Generator",
      desc: "Deep learning model using CNN-LSTM to generate captions for images.",
      tech: ["Python", "TensorFlow", "Deep Learning"],
      image: "https://via.placeholder.com/400x300",
      link: "#",
      github: "#",
      details: "",
    },
  ];

  const categories = ["All", "Web Apps", "UI/UX", "AI/ML"];

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
          <div className="w-full flex justify-center">
            <div className="flex gap-1.5 p-1 bg-gray-100 rounded-full w-full max-w-fit overflow-x-auto no-scrollbar sm:gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`whitespace-nowrap px-4 py-1.5 text-xs sm:px-6 sm:py-2 sm:text-sm font-medium rounded-full transition-all duration-300 ${
                    filter === cat
                      ? "bg-[#d4a017] text-white shadow-sm"
                      : "text-gray-600 hover:text-[#2f2a26] hover:bg-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid with Animation Key */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="animate-in fade-in zoom-in duration-500 group relative"
            >
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
