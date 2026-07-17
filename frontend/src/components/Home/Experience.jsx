// import React from "react";
// import { Download } from "lucide-react";

// const Experience = () => {
//   const experienceData = [
//     {
//       id: 1,
//       role: "",
//       company: "Lookup",
//       period: "2023 — Present",
//       file: "/files/lookup-experience.pdf",
//     },
//     {
//       id: 2,
//       role: "UI/UX Designer & Developer",
//       company: "Qubitz Solutions ",
//       period: "2025 Dec — 2026 March",
//       file: "/files/freelance-experience.pdf",
//     },
//     {
//       id: 3,
//       role: "Graphic Designer (Part time)",
//       company: "Ratna Groups Pvt Ltd",
//       period: "2024 May — June 2025",
//       file: "/files/graz-experience.pdf",
//     },
//   ];

//   return (
//     <section id="experience" className="py-14 bg-[#f8f9fb]">
//       <div className="max-w-4xl mx-auto px-6">
//         {/* HEADER */}
//         <div className="mb-10 md:mb-16 text-center">
//           <h2 className="text-xs md:text-sm font-bold tracking-widest text-[#d4a017] uppercase mb-2">
//             Professional Background
//           </h2>

//           <h3 className="text-2xl md:text-4xl font-extrabold text-[#1a1a1a]">
//             Experience
//           </h3>

//           <div className="w-24 h-[2px] bg-slate-200 mx-auto mt-4"></div>
//         </div>

//         {/* List */}
//         <div className="space-y-6">
//           {experienceData.map((exp) => (
//             <div
//               key={exp.id}
//               className="bg-white rounded-xl border border-gray-100 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:shadow-sm transition"
//             >
//               {/* Left */}
//               <div className="text-left">
//                 <p className="text-sm text-gray-400">{exp.period}</p>

//                 <h3 className="text-lg font-semibold text-[#2f2a26] mt-1">
//                   {exp.role}
//                 </h3>

//                 <p className="text-sm text-gray-600 mt-1">{exp.company}</p>
//               </div>

//               {/* Button */}
//               <a
//                 href={exp.file}
//                 download
//                 className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#2f2a26] rounded-lg hover:bg-[#d4a017] transition"
//               >
//                 <Download size={16} />
//                 Letter
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;

import React from "react";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "UI/UX Designer Intern",
      company: "Qubitz Solutions",
      duration: "Dec 2025 — Mar 2026",
      responsibilities: [
        "Designed and prototyped responsive web interfaces for the Amazly Gift E-Commerce Website using Figma, creating user flows, wireframes, high-fidelity mockups, and interactive prototypes.",
        "Translated Figma designs into reusable React.js components with Tailwind CSS, ensuring pixel-perfect implementation, responsive layouts, and consistent user experience across devices.",
        "Collaborated with developers and stakeholders to iterate on designs, improve usability, maintain design systems, and ensure design-to-development consistency.",
      ],
      technologies: [
        "Figma",
        "FigJam",
        "React.js",
        "Tailwind CSS",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Canva",
      ],
    },
  ];

  return (
    <section id="experience" className="py-10 md:py-14 bg-[#f8f9fb]">
      <div className="max-w-5xl mx-auto px-4 sm:px-5 md:px-6">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <p className="text-[11px] md:text-sm font-bold tracking-widest uppercase text-[#d4a017]">
            Professional Background
          </p>

          <h2 className="text-2xl md:text-4xl font-bold text-[#2f2a26] mt-2">
            Experience
          </h2>

          <div className="w-20 md:w-24 h-[2px] bg-gray-200 mx-auto mt-4 md:mt-5"></div>
        </div>

        {/* Experience Card */}
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="bg-white rounded-xl md:rounded-2xl border border-gray-100 shadow-sm p-4 md:p-6"
          >
            {/* Top */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 md:gap-4">
              <div>
                <div className="flex items-center gap-2 text-[#d4a017] mb-2">
                  <Briefcase className="w-4 h-4 md:w-[18px] md:h-[18px]" />
                  <span className="text-xs md:text-sm font-semibold uppercase tracking-wide">
                    Internship
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-[#2f2a26]">
                  {exp.role}
                </h3>

                <p className="text-base md:text-lg text-gray-600 mt-1">
                  {exp.company}
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm md:text-base text-gray-500">
                <Calendar className="w-4 h-4 md:w-[18px] md:h-[18px]" />
                <span>{exp.duration}</span>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="mt-6 md:mt-8">
              <h4 className="font-semibold text-[#2f2a26] text-sm md:text-base mb-3 md:mb-4">
                Key Responsibilities
              </h4>

              <ul className="space-y-2 md:space-y-3">
                {exp.responsibilities.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-gray-600 leading-6 md:leading-7"
                  >
                    <span className="mt-2 h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-[#d4a017] flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="mt-6 md:mt-8">
              <h4 className="font-semibold text-[#2f2a26] text-sm md:text-base mb-3 md:mb-4">
                Tools & Technologies
              </h4>

              <div className="flex flex-wrap gap-2 md:gap-3">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-[#f3f1eb] text-[#2f2a26] text-xs md:text-sm font-medium border border-[#ece8dd]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
