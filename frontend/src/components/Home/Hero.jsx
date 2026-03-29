import React from "react";
import profile from "../../assets/Images/profile-Nive.png";
import DotPattern from "../UI/DotPattern";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] lg:min-h-screen lg:h-screen bg-[#f4f2f0] flex items-start lg:items-center justify-center px-6 md:px-12 pt-32 lg:pt-0 lg:py-0 overflow-hidden">
      {/* DOT PATTERN BACKGROUND */}
      <DotPattern
        className="z-0 opacity-40 mix-blend-multiply"
        baseColor="#dddad0"
        glowColor="#d4a017"
        dotSize={2}
        gap={26}
        waveSpeed={0.3}
      />

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%] bg-[#d4a017] blur-[100px] md:blur-[120px] rounded-full opacity-15 z-0"></div>

      {/*  REMOVED pointer-events-none */}
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center lg:items-end gap-8 lg:gap-4 w-full max-w-360 z-10">
        {/* LEFT CONTENT */}
        <div className="order-1 space-y-5 text-center lg:text-left lg:pb-8">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#2f2a26] leading-[1.1] tracking-tight whitespace-nowrap md:whitespace-normal">
              A.R <span className="text-[#d4a017]">Nivethanan</span>
              <span className="inline md:block"> Croos</span>
            </h1>
            <div className="h-1 w-20 bg-[#2f2a26] mx-auto lg:ml-0 rounded-full lg:h-1.5"></div>
          </div>

          <h2 className="text-base md:text-lg text-[#2f2a26] font-semibold tracking-wider flex flex-wrap justify-center lg:justify-start items-center gap-2">
            BSc Computer Engineering
            <span className="hidden md:inline text-[#d4a017] font-light">
              |
            </span>
            <span className="text-sm font-normal text-[#6f6256]">
              University of Jaffna
            </span>
          </h2>

          <p className="text-sm md:text-base text-[#6f6256] leading-relaxed max-w-sm mx-auto lg:ml-0">
            Specializing in{" "}
            <span className="text-[#d4a017] font-bold">
              Frontend Development
            </span>
            , UI/UX, and Graphic Design—crafting digital experiences.
          </p>
        </div>

        {/* CENTER IMAGE */}
        <div className="order-2 flex justify-center items-end relative lg:static flex-1 lg:h-full">
          <div className="lg:absolute lg:bottom-0 z-10 transition-transform duration-500 hover:scale-[1.02] flex justify-center items-end">
            <img
              src={profile}
              alt="A.R Nivethanan Croos Profile"
              className="h-full max-h-[45vh] sm:max-h-[55vh] md:max-h-[65vh] lg:max-h-[90vh] object-contain object-bottom drop-shadow-2xl"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="hidden lg:block order-3 space-y-6 text-center lg:text-right lg:pb-18">
          <div className="space-y-2">
            <p className="text-xs font-bold tracking-[0.3em] text-[#d4a017] uppercase">
              My Journey
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#2f2a26] opacity-90">
              Experience
            </h2>
          </div>

          <p className="text-sm md:text-base text-[#6f6256] leading-relaxed max-w-sm mx-auto lg:mr-0">
            Building impactful products through hands-on software development
            and creative problem-solving.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end pt-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-[#2f2a26] text-white rounded-full text-sm font-bold shadow-lg hover:bg-[#d4a017] hover:text-[#2f2a26] transition-all duration-300">
              View Experience
            </button>

            <button className="w-full sm:w-auto px-8 py-4 border-2 border-[#d4a017] text-[#2f2a26] rounded-full text-sm font-bold hover:bg-[#d4a017] hover:text-white transition-all duration-300">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
