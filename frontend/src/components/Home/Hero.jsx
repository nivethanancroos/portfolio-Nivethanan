import React from "react";
import profile from "../../assets/Images/profile-Nive.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#f4f2f0] flex items-center justify-center px-6 md:px-16 py-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 w-full max-w-7xl">
        {/* Left Content */}
        <div className="text-center md:text-left space-y-3">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#5a4634] leading-tight">
            A.R Nivethanan Croos
          </h1>

          <h3 className="text-sm sm:text-base md:text-lg text-[#5a4634] leading-snug">
            BSc Computer Engineering <br />
            University of Jaffna
          </h3>

          <p className="text-xs sm:text-sm md:text-base text-[#7a6a5a] leading-relaxed max-w-sm mx-auto md:mx-0">
            Specializing in Frontend Development, UI/UX Design, and Graphic
            Design, crafting clean interfaces and engaging user experiences.
          </p>
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
          <div className="relative">
            <img
              src={profile}
              alt="profile"
              className="w-[280px] sm:w-[350px] md:w-[450px] lg:w-[550px] object-contain"
            />

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-white/30 blur-3xl -z-10 rounded-full"></div>
          </div>
        </div>

        {/* Right Content */}
        <div className="text-center md:text-right space-y-3">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#5a4634]">
            Software Engineer
          </h2>

          <div className="text-sm sm:text-base text-[#5a4634] space-y-1">
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
