import React from "react";

const Education = () => {
  const educationData = [
    {
      title: "Bachelor of Science of Engineering in Computer Engineering",
      place: "University of Jaffna",
      period: "April 2021 - Present",
      desc: "Undergraduate focusing on software engineering, UI/UX, and modern web technologies.",
    },
    {
      title: "G.C.E (A/L) – Physical Science",
      place: "MnSt.Anne’s College, Vankalai",
      period: "May 2017 - Aug 2019",
      result: "Results: 3B",
      desc: "Specialized in Mathematics, Physics, and Chemistry with strong analytical skills.",
    },
    {
      title: "Grade 01 - G.C.E (O/L)",
      place: "MnSt.Anne’s College, Vankalai",
      period: "Jan 2006 - Dec 2016",
      result: "Results: 7A 2B",
      desc: "Built a strong academic foundation with excellent performance.",
    },
  ];

  return (
    <section
      id="education"
      className="bg-[#f4f2f0] py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#2f2a26] mb-4">
          Education
        </h2>
        <div className="h-1 w-20 bg-[#d4a017] mb-12 rounded-full"></div>

        {/* TIMELINE */}
        <div className="relative border-l-2 border-[#d4a017]/40 pl-8 space-y-10">
          {educationData.map((edu, index) => (
            <div key={index} className="relative group">
              {/* DOT */}
              <div className="absolute -left-[11px] top-2 w-5 h-5 bg-[#d4a017] rounded-full border-4 border-white shadow-md group-hover:scale-110 transition"></div>

              {/* CARD */}
              <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-md border border-white/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg md:text-xl font-semibold text-[#2f2a26]">
                  {edu.title}
                </h3>

                <p className="text-[#d4a017] font-medium text-sm mt-1">
                  {edu.place}
                </p>

                <p className="text-sm text-slate-500 mb-2">{edu.period}</p>

                {edu.result && (
                  <p className="text-sm font-semibold text-[#2f2a26] mb-2">
                    {edu.result}
                  </p>
                )}

                <p className="text-slate-600 leading-relaxed">{edu.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* DECORATIVE BLOBS */}
        <div className="absolute right-10 bottom-10 w-32 h-32 bg-[#d4a017]/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute left-10 top-10 w-24 h-24 bg-[#2f2a26]/10 rounded-full blur-2xl opacity-40"></div>
      </div>
    </section>
  );
};

export default Education;
