import React from "react";
import profile from "../../assets/Images/profile-Nive.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#f4f2f0] flex items-center justify-center px-6 md:px-16 py-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10 w-full max-w-7xl">
        {/* LEFT CONTENT (YOUR NAME BLOCK) */}
        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#6b4c3b] leading-tight tracking-wide">
            A.R Nivethanan Croos
          </h1>

          <h2 className="text-sm sm:text-base md:text-lg text-[#2f2a26] font-medium">
            BSc Computer Engineering | University Of Jaffna
          </h2>

          <p className="text-xs sm:text-sm text-[#6f6256] leading-relaxed max-w-md">
            Specializing in Frontend Development, UI/UX Design, and Graphic
            Design, with a focus on crafting clean interfaces and engaging
            digital experiences.
          </p>
        </div>

        {/* CENTER IMAGE */}
        <div className="flex justify-center">
          <div className="relative">
            <img
              src={profile}
              alt="profile"
              className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] object-contain relative z-10"
            />

            {/* Glow Background */}
            <div className="absolute inset-0 bg-[#d6cfc7] blur-3xl rounded-full scale-110"></div>
          </div>
        </div>

        {/* RIGHT CONTENT (MOVED FROM LEFT) */}
        <div className="space-y-6 text-center md:text-right">
          <p className="text-xs tracking-[0.2em] text-[#8a7a6a] uppercase">
            Available for Work
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#2f2a26] leading-tight">
            Software <br /> Engineer
          </h2>

          <p className="text-sm sm:text-base text-[#6f6256] leading-relaxed max-w-md ml-auto">
            Architecting robust digital solutions with a deep-rooted passion for
            elegant, user-centric systems.
          </p>

          <div className="flex gap-4 justify-center md:justify-end">
            <button className="px-6 py-3 bg-[#6b4c3b] text-white rounded-full text-sm hover:scale-105 transition">
              View Projects
            </button>
            <button className="px-6 py-3 bg-[#e2ded9] text-[#2f2a26] rounded-full text-sm hover:scale-105 transition">
              Read Bio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
