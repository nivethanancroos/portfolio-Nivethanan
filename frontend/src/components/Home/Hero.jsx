import React from "react";
import profile from "../../assets/Images/profile-Nive.png";

const Hero = () => {
  return (
    <section
      id="home"
      /* Added 'relative' and changed 'py-20' to 'pt-20 pb-0' to remove bottom padding */
      className="relative min-h-screen bg-[#f4f2f0] flex items-center justify-center px-6 md:px-12 pt-20 pb-0 overflow-hidden"
    >
      {/* Changed 'items-center' to 'items-end' so content aligns to the bottom.
        This forces the image container to the baseline.
      */}
      <div className="grid grid-cols-1 lg:grid-cols-3 items-end gap-12 lg:gap-4 w-full max-w-[1440px] z-10">
        {/* LEFT CONTENT: IDENTITY */}
        {/* Added 'pb-20' (or similar padding) to restore spacing for text content, 
            as we removed it from the parent section */}
        <div className="order-2 lg:order-1 space-y-5 text-center lg:text-left pb-20 lg:pb-32">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2f2a26] leading-[1.1] tracking-tight">
              A.R Nivethanan <span className="block text-[#2f2a26]">Croos</span>
            </h1>
            <div className="h-1.5 w-20 bg-[#2f2a26] mx-auto lg:ml-0 rounded-full"></div>
          </div>

          <h2 className="text-base md:text-lg text-[#2f2a26] font-semibold uppercase tracking-wider">
            BSc Computer Engineering
            <span className="block text-sm font-normal text-[#6f6256] mt-1">
              University Of Jaffna
            </span>
          </h2>

          <p className="text-sm md:text-base text-[#6f6256] leading-relaxed max-w-sm mx-auto lg:ml-0">
            Specializing in{" "}
            <span className="text-[#d4a017] font-bold">
              Frontend Development
            </span>
            , UI/UX, and Graphic Design—crafting digital experiences that
            balance form and function.
          </p>
        </div>

        {/* CENTER IMAGE: FITS BOTTOM LINE */}
        {/* 1. Removed 'items-center' (already handled by 'items-end' on grid).
          2. Crucial: changed 'relative' to 'static' (or removed it) on the image DIV itself 
             so the *image inside* can be positioned relative to the whole SECTION.
        */}
        <div className="order-1 lg:order-2 flex justify-center static">
          {/* Glow Effect - Slightly adjusted positioning */}
          <div className="absolute bottom-0 w-[60%] h-[50%] bg-[#d4a017] blur-[120px] rounded-full opacity-20 z-0"></div>

          {/* Image Container: 
            - Set to 'absolute bottom-0' to pin it to the section bottom.
            - We manage height/width specifically so it scales correctly 
              while remaining pinned.
          */}
          <div className="absolute bottom-0 z-10 transition-transform duration-500 hover:scale-[1.02] flex justify-center items-end">
            <img
              src={profile}
              alt="A.R Nivethanan Croos Profile"
              /* - Switched from width constraints (w-[550px]) to height constraints 
                  (h-[60vh] to h-[90vh]). This ensures the image doesn't get cut off 
                  at the top on shorter screens while keeping the bottom pinned.
                - 'object-bottom' ensures the alignment is strict.
              */
              className="h-[65vh] sm:h-[75vh] md:h-[85vh] lg:h-[95vh] max-h-[1000px] object-contain object-bottom drop-shadow-2xl"
            />
          </div>
        </div>

        {/* RIGHT CONTENT: EXPERIENCE & ACTION */}
        {/* Added 'pb-20' (or similar padding) to restore spacing */}
        <div className="order-3 lg:order-3 space-y-6 text-center lg:text-right pb-20 lg:pb-32">
          <div className="space-y-2">
            <p className="text-xs font-bold tracking-[0.3em] text-[#d4a017] uppercase">
              My Journey
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#2f2a26] opacity-90">
              Experience
            </h2>
          </div>

          <p className="text-sm md:text-base text-[#6f6256] leading-relaxed max-w-sm mx-auto lg:mr-0">
            Building impactful products through hands-on software development
            and creative problem-solving.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-end pt-4">
            <button className="px-8 py-4 bg-[#2f2a26] text-white rounded-full text-sm font-bold shadow-lg hover:bg-[#d4a017] hover:text-[#2f2a26] hover:-translate-y-1 transition-all duration-300">
              View Experience
            </button>
            <button className="px-8 py-4 border-2 border-[#d4a017] text-[#2f2a26] rounded-full text-sm font-bold hover:bg-[#d4a017] hover:text-white hover:-translate-y-1 transition-all duration-300">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
