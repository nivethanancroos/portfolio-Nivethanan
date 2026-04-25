import React from "react";
import { motion } from "framer-motion";
import IMSGroup1 from "../../../assets/Images/IMS/IMSGroup1.jpg";
import IMSGroup2 from "../../../assets/Images/IMS/IMSGroup2.jpg";

const WorkflowSection = () => {
  return (
    <section className="bg-slate-50 py-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 text-center">
          Team Collaboration & Workflow
        </h2>

        {/* DESCRIPTION */}
        <p className="text-slate-600 text-sm text-center max-w-3xl mx-auto mb-14">
          Our development process began with collaborative group discussions to
          understand system requirements, define workflows, and plan
          implementation strategies. This approach ensured efficient teamwork,
          clear communication, and structured execution.
        </p>

        {/* IMAGES */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* IMAGE 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
          >
            <img
              src={IMSGroup1}
              alt="Team discussion and planning"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* IMAGE 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
          >
            <img
              src={IMSGroup2}
              alt="Team working on development"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
