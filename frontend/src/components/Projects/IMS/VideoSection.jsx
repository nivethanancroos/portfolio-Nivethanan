import React from "react";
import { motion } from "framer-motion";
import IMSVideo from "../../../assets/Images/IMS/IMSvedio.mp4";

const VideoSection = () => {
  return (
    <section
      id="video"
      className="bg-gradient-to-b from-slate-50 to-white py-14 px-4 md:px-10"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* TITLE */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            System Demo
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-3 max-w-2xl mx-auto">
            A quick walkthrough of the Inventory Management System showcasing
            key features, user interface, and workflow in action.
          </p>
        </div>

        {/* VIDEO CONTAINER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-full md:w-[85%] lg:w-[75%] rounded-2xl overflow-hidden shadow-2xl bg-white/70 backdrop-blur-md border border-slate-200 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-300">
            <video
              src={IMSVideo}
              controls
              className="w-full h-[220px] sm:h-[320px] md:h-[420px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
