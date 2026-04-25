import React from "react";
import visly from "../../assets/Images/visily-logo.png";

const techStack = [
  {
    name: "HTML5",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Tailwind",
    image: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "React",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "MongoDB",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Express",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Node",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Next.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "REST API",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  {
    name: "Material UI",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  },
  {
    name: "MySQL",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Framer Motion",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
];

const tools = [
  {
    name: "Vercel",
    image:
      "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png",
  },
  {
    name: "Figma",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  { name: "Visily", image: visly },
  {
    name: "Photoshop",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
  },
  {
    name: "Illustrator",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
  },
  {
    name: "Git",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "VS Code",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Postman",
    image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
];

const MarqueeRow = ({ items, reverse = false }) => {
  return (
    <div className="overflow-hidden w-full group">
      <div
        className={`flex w-max gap-6 py-4 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } group-hover:[animation-play-state:paused]`}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-5 py-2 bg-white/80 backdrop-blur-md 
            border border-[#2f2a26]/10 rounded-full shadow-sm 
            hover:shadow-md hover:scale-105 transition-all duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-5 h-5 object-contain"
            />
            <span className="text-sm text-[#2f2a26] font-medium whitespace-nowrap">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const TechTools = () => {
  return (
    <section className="py-16 bg-[#f8f5f0] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#2f2a26]">
          Tech & Tools
        </h2>
        <span className="block h-1 w-16 bg-[#d4a017] mx-auto mt-3 rounded-full"></span>

        <p className="text-[#2f2a26]/60 mt-4 text-sm max-w-xl mx-auto">
          Technologies and tools I use to build modern applications.
        </p>

        {/* Tech Stack */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-[#d4a017] mb-4">
            Tech Stack
          </h3>
          <MarqueeRow items={techStack} />
        </div>

        {/* Tools */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-[#d4a017] mb-4">
            Tools & Design
          </h3>
          <MarqueeRow items={tools} reverse />
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 25s linear infinite;
        }
        `}
      </style>
    </section>
  );
};

export default TechTools;
