import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Rocket, ChevronRight } from "lucide-react";

const AboutMe = () => {
  const skills = [
    "Frontend Development",
    "UI/UX Design",
    "React & Modern JS",
    "Problem Solving",
  ];

  const stats = [
    {
      icon: <Code size={20} />,
      title: "10+ Projects",
      desc: "Built modern web applications",
    },
    {
      icon: <Palette size={20} />,
      title: "Design Driven",
      desc: "Focused on clean & intuitive UI/UX",
    },
    {
      icon: <Rocket size={20} />,
      title: "Builder Mindset",
      desc: "Turning ideas into real products",
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-slate-50 py-14 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-[0.05] pointer-events-none">
        <div className="absolute top-24 left-10 w-64 h-64 bg-amber-400 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-6">
            <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
            Open to opportunities
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Crafting intuitive digital experiences with{" "}
            <span className="text-amber-500">design & code.</span>
          </h2>

          {/* STORY TEXT */}
          <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
            <p>
              I'm a Computer Engineering student with a strong interest in
              frontend development and UI/UX design.
            </p>

            <p>
              I enjoy transforming complex ideas into simple, user-friendly
              interfaces that deliver real value and seamless experiences.
            </p>

            <p>
              My focus is on building modern, responsive web applications using
              clean design principles and scalable frontend technologies.
            </p>
          </div>

          {/* SKILLS */}
          <div className="flex flex-wrap gap-3 mt-10">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.08 }}
                className="bg-white border border-slate-200 px-4 py-2 rounded-xl text-slate-700 text-sm font-medium shadow-sm hover:border-amber-400 hover:text-amber-600 transition-all duration-300 cursor-pointer"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* CURRENTLY EXPLORING */}
          <div className="mt-8 p-5 bg-amber-50 rounded-2xl border border-amber-100">
            <p className="text-sm text-slate-600 mb-1">Currently exploring</p>
            <p className="font-semibold text-slate-800">
              AI-powered interfaces, micro-interactions & advanced frontend
              architectures
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-6"
        >
          {/* STATS CARDS */}
          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex items-start gap-4 hover:shadow-amber-100 transition-all"
            >
              <div className="p-3 bg-amber-100 text-amber-600 rounded-xl">
                {item.icon}
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h4>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            onClick={() => {
              document.getElementById("projects").scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="mt-6 bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-amber-500 transition-all shadow-lg flex items-center justify-center gap-2 group"
          >
            Explore My Work
            <ChevronRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
