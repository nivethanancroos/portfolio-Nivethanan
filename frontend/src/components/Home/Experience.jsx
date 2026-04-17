import React from "react";
import { Download } from "lucide-react";

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      role: "",
      company: "Lookup",
      period: "2023 — Present",
      file: "/files/lookup-experience.pdf",
    },
    {
      id: 2,
      role: "UI/UX Designer & Developer",
      company: "Qubitz Solutions ",
      period: "2025 Dec — 2026 March",
      file: "/files/freelance-experience.pdf",
    },
    {
      id: 3,
      role: "Graphic Designer (Part time)",
      company: "Ratna Groups Pvt Ltd",
      period: "2024 May — June 2025",
      file: "/files/graz-experience.pdf",
    },
  ];

  return (
    <section id="experience" className="py-14 bg-[#f8f9fb]">
      <div className="max-w-4xl mx-auto px-6">
        {/* HEADER */}
        <div className="mb-10 md:mb-16 text-center">
          <h2 className="text-xs md:text-sm font-bold tracking-widest text-[#d4a017] uppercase mb-2">
            Professional Background
          </h2>

          <h3 className="text-2xl md:text-4xl font-extrabold text-[#1a1a1a]">
            Experience
          </h3>

          <div className="w-24 h-[2px] bg-slate-200 mx-auto mt-4"></div>
        </div>

        {/* List */}
        <div className="space-y-6">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="bg-white rounded-xl border border-gray-100 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:shadow-sm transition"
            >
              {/* Left */}
              <div className="text-left">
                <p className="text-sm text-gray-400">{exp.period}</p>

                <h3 className="text-lg font-semibold text-[#2f2a26] mt-1">
                  {exp.role}
                </h3>

                <p className="text-sm text-gray-600 mt-1">{exp.company}</p>
              </div>

              {/* Button */}
              <a
                href={exp.file}
                download
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#2f2a26] rounded-lg hover:bg-[#d4a017] transition"
              >
                <Download size={16} />
                Letter
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
