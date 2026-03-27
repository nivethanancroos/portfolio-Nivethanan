import React from "react";
import profile from "../../assets/Images/profile-Nive.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#f4f2f0] flex items-center justify-center px-6 md:px-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10 w-full max-w-6xl">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h1 className="text-[24px] md:text-[28px] font-semibold text-[#5a4634]">
            A.R Nivethanan Croos
          </h1>

          <h3 className="text-[14px] text-[#5a4634] mt-2">
            BSc Computer Engineering <br />
            University Of Jaffna
          </h3>

          <p className="text-[12px] text-[#7a6a5a] mt-3 leading-relaxed">
            Specializing in Frontend Development, UI/UX Design, and Graphic
            Design, crafting clean interfaces and engaging experiences.
          </p>
        </div>

        {/* Center Image (MAIN FOCUS) */}
        <div className="flex justify-center">
          <div className="relative">
            <img
              src={profile}
              alt="profile"
              className="w-[350px] md:w-[420px] lg:w-[500px] object-contain"
            />

            {/* Optional subtle glow effect */}
            <div className="absolute inset-0 bg-white/20 blur-2xl -z-10 rounded-full"></div>
          </div>
        </div>

        {/* Right Content */}
        <div className="text-center md:text-right">
          <h2 className="text-[22px] md:text-[26px] font-semibold text-[#5a4634]">
            Software Engineer
          </h2>

          <div className="mt-3 space-y-1 text-[14px] text-[#5a4634]">
            <p>Frontend Developer</p>
            <p>UI/UX Designer</p>
            <p>Graphic Designer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
