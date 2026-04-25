import React from "react";
import { motion } from "framer-motion";
import Img3 from "../../../assets/Images/IMS/IMSGroup3.jpg";

const RequirementAnalysis = () => {
  return (
    <section className="bg-white py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-start">
        {/* LEFT - IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-xl"
        >
          <img
            src={Img3}
            alt="Requirement analysis meeting"
            className="
              w-full 
              h-[280px] 
              sm:h-[250px] 
              md:h-[320px] 
              lg:h-[420px] 
              object-cover 
              hover:scale-105 
              transition duration-500
            "
          />
        </motion.div>

        {/* RIGHT - TEXT */}
        <div className="flex flex-col justify-center">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
            Requirement Analysis
          </h2>

          <p className="text-slate-600 mb-6 text-sm md:text-base max-w-lg">
            Conducted meetings with the technical officer to understand the
            current inventory workflow, identify inefficiencies, and define
            system requirements for the proposed solution.
          </p>

          {/* BULLETS */}
          <ul className="space-y-3 text-sm md:text-base text-slate-700">
            {[
              "Gathered requirements about the existing inventory management process.",
              "Observed how equipment and assets are recorded and tracked.",
              "Identified issues such as data duplication and difficulty in tracking.",
              "Discussed features like item issuing, returns, and inventory updates.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-amber-500 mt-1">➤</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RequirementAnalysis;
