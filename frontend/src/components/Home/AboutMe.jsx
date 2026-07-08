import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  const skills = [
    "React",
    "JavaScript",
    "UI/UX",
    "Tailwind CSS",
    "Frontend Development",
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-amber-500 font-semibold uppercase tracking-wider mb-2">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frontend Developer & UI/UX Designer
          </h2>

          <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
            <p>
              I'm a Computer Engineering student passionate about creating
              modern, responsive, and user-friendly web applications.
            </p>

            <p>
              I enjoy turning ideas into clean digital experiences using React,
              JavaScript, and modern frontend technologies.
            </p>

            <p>
              I'm always learning new technologies and improving my design and
              development skills to build better products.
            </p>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-3 mt-10">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 text-sm hover:border-amber-500 hover:text-amber-500 transition"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Button */}
          <button
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="mt-10 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-amber-500 transition"
          >
            View My Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
