import React from "react";
import {
  GraduationCap,
  MapPin,
  Layout,
  Briefcase,
  ChevronRight,
} from "lucide-react"; // Optional: npm install lucide-react

const AboutMe = () => {
  const skills = [
    "Frontend Development",
    "UI/UX Design",
    "Business Strategy",
    "Problem Solving",
  ];

  const quickInfo = [
    { icon: <GraduationCap size={18} />, text: "Computer Engineering Student" },
    { icon: <MapPin size={18} />, text: "Based in Sri Lanka" },
    { icon: <Layout size={18} />, text: "Frontend & UI/UX Specialist" },
    { icon: <Briefcase size={18} />, text: "Founder of Lookup" },
  ];

  return (
    <section
      id="about"
      className="relative bg-slate-50 py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Subtle Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-24 left-10 w-64 h-64 bg-amber-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* LEFT SIDE: Content */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            Available for projects
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Building digital products with{" "}
            <span className="text-amber-500">purpose.</span>
          </h2>

          <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>
              I’m a Computer Engineering student dedicated to crafting
              user-centered digital experiences. I bridge the gap between
              complex engineering and intuitive design to create
              <span className="font-semibold text-slate-800">
                {" "}
                seamless, modern interfaces.
              </span>
            </p>

            <p>
              Outside of academics, I lead a creative studio that transforms
              concepts into impactful products—merging the digital and physical
              worlds to solve real-world problems.
            </p>
          </div>

          {/* SKILLS / TAGS */}
          <div className="flex flex-wrap gap-3 mt-10">
            {skills.map((item, index) => (
              <span
                key={index}
                className="bg-white border border-slate-200 px-4 py-2 rounded-xl text-slate-700 text-sm font-medium shadow-sm hover:border-amber-400 hover:text-amber-600 transition-all duration-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: Card Section */}
        <div className="relative group">
          {/* Main Card */}
          <div className="bg-white/80 backdrop-blur-2xl p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-white relative z-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">
              Quick Highlights
            </h3>

            <div className="grid gap-6">
              {quickInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 group/item hover:translate-x-1 transition-transform"
                >
                  <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl group-hover/item:bg-amber-500 group-hover/item:text-white transition-colors duration-300">
                    {info.icon}
                  </div>
                  <span className="text-slate-700 font-medium text-lg leading-tight">
                    {info.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CALL TO ACTION BUTTON */}
            <div className="mt-10 pt-8 border-t border-slate-100">
              <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-amber-500 transition-all shadow-lg hover:shadow-amber-200 flex items-center justify-center gap-2 group">
                View My Projects
                <ChevronRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>

          {/* DECORATIVE BACKGROUND ELEMENTS */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-amber-200/50 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-slate-200 rounded-full blur-2xl opacity-40"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
