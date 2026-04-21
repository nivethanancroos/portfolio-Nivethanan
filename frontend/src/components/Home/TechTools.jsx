import React from "react";
import visly from "../../assets/Images/visily-logo.png";

const techStack = [
  {
    name: "HTML5",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    level: 95,
  },
  {
    name: "CSS3",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    level: 85,
  },
  {
    name: "JavaScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    level: 80,
  },
  {
    name: "Tailwind CSS",
    image: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    level: 80,
  },
  {
    name: "React",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    level: 80,
  },
  {
    name: "MongoDB",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    level: 77,
  },
  {
    name: "Express.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    level: 70,
  },
  {
    name: "Node.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    level: 75,
  },
];

const tools = [
  {
    name: "Figma",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    level: 85,
  },
  {
    name: "Visily",
    image: visly,
    level: 80,
  },
  {
    name: "Photoshop",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
    level: 98,
  },
  {
    name: "Illustrator",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
    level: 85,
  },
  {
    name: "Git",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    level: 80,
  },
  {
    name: "GitHub",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    level: 80,
  },
  {
    name: "VS Code",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    level: 90,
  },
  {
    name: "Postman",
    image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    level: 80,
  },
];

const SkillCard = ({ item }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-[#2f2a26]/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-12 h-12 object-contain"
        />
      </div>

      {/* Title */}
      <h4 className="text-lg font-semibold text-center text-[#2f2a26] mb-3">
        {item.name}
      </h4>

      {/* Progress Bar */}
      <div className="w-full bg-[#2f2a26]/10 rounded-full h-2.5">
        <div
          className="h-2.5 rounded-full bg-[#d4a017] transition-all duration-500"
          style={{ width: `${item.level}%` }}
        ></div>
      </div>

      {/* Percentage */}
      <p className="text-sm text-[#2f2a26]/60 text-center mt-2">
        {item.level}%
      </p>
    </div>
  );
};

const TechTools = () => {
  return (
    <section className="py-20 bg-[#f8f5f0]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Main Title */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f2a26] relative inline-block">
            Tech & Tools
            {/* Underline Accent */}
            <span className="block h-1 w-16 bg-[#d4a017] mx-auto mt-3 rounded-full"></span>
          </h2>

          {/* Subtitle */}
          <p className="text-[#2f2a26]/60 mt-4 text-sm md:text-base max-w-xl mx-auto">
            Technologies and tools I use to build modern, scalable, and visually
            appealing applications.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-[#d4a017] mb-8">
            Tech Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((item, index) => (
              <SkillCard key={index} item={item} />
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-xl font-semibold text-[#d4a017] mb-8">
            Tools & Design
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((item, index) => (
              <SkillCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechTools;
