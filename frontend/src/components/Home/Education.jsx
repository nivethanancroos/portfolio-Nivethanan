import React, { useState } from "react";

const Education = () => {
  const educationData = [
    {
      id: 1,
      title: "B.Sc. Eng. (Hons) in Computer Engineering",
      place: "University of Jaffna",
      period: "April 2021 — Aug 2026",
      desc: "Pursuing Computer Engineering with a solid foundation in computing, focused on developing scalable software solutions and intuitive user experiences while strengthening problem-solving and practical development skills.",
      highlights: [
        "Software Engineering",
        "Software Construction",
        "Datastructures & Algorithms",
        "Databse Systems",
        "Human Computer Interaction",
        "Operating Systems",
        "Computer Network Security",
        "Computer Architecture",
        "Machine Learning",
        "Deep Learning",
        "Artificial Intelligence",
      ],
    },
    {
      id: 2,
      title: "G.C.E. Advanced Level",
      place: "Mn/St. Anne’s National College",
      period: "May 2017 — Aug 2019",
      result: "Results: 3B (Physical Science)",
      desc: "Built a strong foundation in mathematics, physics, and analytical problem-solving.",
      highlights: ["Combined Mathematics", "Physics", "Chemistry"],
    },
    {
      id: 3,
      title: "G.C.E. Ordinary Level",
      place: "Mn/St. Anne’s National College",
      period: "Jan 2015 — Dec 2016",
      result: "Results: 8A, C",
      desc: "Foundational education with a focus on well-rounded academic development and versatile learning across core subjects.",
      highlights: [
        "Mathematics",
        "Science",
        "English Language",
        "Tamil Language & Literature",
        "Catholicism",
        "History",
        "ICT",
        "Art",
        "Business Studies",
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(educationData[0]);

  return (
    <section
      id="education"
      className="bg-[#f9fafb] py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-10 md:mb-16">
          <h2 className="text-xs md:text-sm font-bold tracking-widest text-[#d4a017] uppercase mb-2">
            Academic Background
          </h2>
          <div className="flex items-center gap-4">
            <h3 className="text-2xl md:text-4xl font-extrabold text-[#1a1a1a]">
              Education
            </h3>
            <div className="h-[2px] flex-grow bg-slate-200 mt-2"></div>
          </div>
        </div>

        {/* MOBILE: Horizontal Scroll Timeline */}
        <div className="md:hidden mb-8 overflow-x-auto scrollbar-hide">
          <div className="flex gap-4">
            {educationData.map((edu) => (
              <div
                key={edu.id}
                onClick={() => setActiveTab(edu)}
                className={`min-w-[250px] p-4 rounded-2xl border cursor-pointer transition ${
                  activeTab.id === edu.id
                    ? "border-[#d4a017] bg-[#d4a017]/5"
                    : "border-slate-200 bg-white"
                }`}
              >
                <p className="text-xs text-slate-400 mb-1">{edu.period}</p>
                <h4 className="font-bold text-sm">{edu.title}</h4>
                <p className="text-xs text-slate-600">{edu.place}</p>

                {edu.result && (
                  <span
                    className={`inline-block mt-2 text-[11px] font-semibold px-2 py-0.5 rounded-full transition ${
                      activeTab.id === edu.id
                        ? "bg-[#d4a017]/10 text-[#d4a017] border border-[#d4a017]/20"
                        : "bg-slate-100 text-slate-600 border border-slate-200"
                    }`}
                  >
                    {edu.result}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP GRID (unchanged) */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 lg:gap-24">
          {/* LEFT SIDE */}
          <div className="space-y-12">
            {educationData.map((edu) => (
              <div
                key={edu.id}
                onMouseEnter={() => setActiveTab(edu)}
                className={`relative pl-8 border-l-2 transition-all duration-300 cursor-pointer group ${
                  activeTab.id === edu.id
                    ? "border-[#d4a017]"
                    : "border-slate-200"
                }`}
              >
                <div
                  className={`absolute -left-[5.5px] top-1 w-[9px] h-[9px] rounded-full ${
                    activeTab.id === edu.id
                      ? "bg-[#d4a017] scale-125"
                      : "bg-slate-300"
                  }`}
                ></div>

                <p className="text-sm font-semibold text-slate-400 mb-2">
                  {edu.period}
                </p>

                <h3
                  className={`text-xl font-bold ${
                    activeTab.id === edu.id
                      ? "text-[#d4a017]"
                      : "text-[#2f2a26]"
                  }`}
                >
                  {edu.title}
                </h3>

                <p className="text-md text-slate-700 mt-1">{edu.place}</p>

                {edu.result && (
                  <span className="inline-block mt-2 text-sm font-bold bg-slate-100 px-2 py-0.5 rounded">
                    {edu.result}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            <div className="sticky top-24">
              <DetailsCard activeTab={activeTab} />
            </div>
          </div>
        </div>

        {/* MOBILE DETAILS */}
        <div className="md:hidden">
          <DetailsCard activeTab={activeTab} />
        </div>
      </div>
    </section>
  );
};

/* Extracted component for reuse */
const DetailsCard = ({ activeTab }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg md:text-xl font-semibold text-[#2f2a26]">
          Learning Highlights
        </h4>
        <div className="h-1 w-10 bg-[#d4a017] rounded-full"></div>
      </div>

      {/* Description */}
      <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
        <span className="text-[#d4a017] text-lg">“</span>
        {activeTab.desc}
        <span className="text-[#d4a017] text-lg">”</span>
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {activeTab.highlights.map((skill, i) => (
          <span
            key={i}
            className="px-3 py-1.5 text-xs md:text-sm font-medium text-[#2f2a26] bg-[#f8f6f2] border border-gray-200 rounded-full hover:bg-[#d4a017]/10 hover:border-[#d4a017] hover:text-[#2f2a26] transition-all duration-200 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Education;
