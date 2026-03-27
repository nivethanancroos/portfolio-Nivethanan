import React from "react";
import profile from "../../assets/Images/profile-Nive.png";

const Hero = () => {
  return (
    <section
      className="flex items-center justify-between px-16 py-12 bg-[#f4f2f0]"
      id="home"
    >
      {/* Left Content */}
      <div className="max-w-[400px]">
        <h1 className="text-[28px] font-semibold text-[#5a4634]">
          A.R Nivethanan Croos
        </h1>

        <h3 className="text-[15px] text-[#5a4634] mt-2">
          BSc Computer Engineering | University Of Jaffna
        </h3>

        <p className="text-[12px] text-[#7a6a5a] mt-3 leading-relaxed">
          Specializing in Frontend Development, UI/UX Design, and Graphic
          Design, With A Focus On Crafting Clean Interfaces And Engaging Digital
          Experiences.
        </p>
      </div>

      {/* Center Image */}
      <div className="flex justify-center">
        <img src={profile} alt="profile" className="w-[300px] object-contain" />
      </div>

      {/* Right Content */}
      <div className="text-left">
        <h2 className="text-[26px] font-semibold text-[#5a4634]">
          Software Engineer
        </h2>

        <p className="text-[14px] text-[#5a4634] mt-2">Frontend Developer</p>
        <p className="text-[14px] text-[#5a4634]">UI/UX Designer</p>
        <p className="text-[14px] text-[#5a4634]">Graphic Designer</p>
      </div>
    </section>
  );
};

export default Hero;
