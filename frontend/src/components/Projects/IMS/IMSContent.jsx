import React from "react";
import { ExternalLink } from "lucide-react";

const IMSContent = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          Inventory Management System
        </h2>

        {/* DESCRIPTION */}
        <p className="text-slate-600 text-lg leading-relaxed mb-8">
          A full-stack inventory management solution designed to streamline item
          tracking, role-based access control, and reporting across multiple
          locations. Built with a modern tech stack, the system ensures high
          performance, scalability, and a seamless user experience.
        </p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-3 mb-10">
          {[
            "React",
            "Tailwind CSS",
            "Spring Boot",
            "Spring Security",
            "PostgreSQL",
            "AWS",
          ].map((tech, i) => (
            <span
              key={i}
              className="bg-slate-100 border border-slate-200 px-4 py-1.5 rounded-lg text-sm text-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* FEATURES (adds more professionalism 🔥) */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {[
            "Role-based authentication & authorization",
            "Real-time inventory tracking",
            "Multi-location management",
            "Detailed reporting & analytics",
          ].map((feature, i) => (
            <div
              key={i}
              className="p-4 border border-slate-200 rounded-lg bg-slate-50"
            >
              <p className="text-slate-700">{feature}</p>
            </div>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-4">
          <a
            href="https://inventrax.sytes.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-amber-500 transition"
          >
            Live Demo <ExternalLink size={18} />
          </a>

          <a
            href="https://github.com/karenthiran/Inventory-Management-System.git"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-slate-300 px-6 py-3 rounded-xl font-semibold hover:border-amber-500 hover:text-amber-600 transition"
          >
            GitHub <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default IMSContent;
