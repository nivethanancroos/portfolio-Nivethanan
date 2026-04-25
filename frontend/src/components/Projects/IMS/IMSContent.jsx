import React from "react";
import { ExternalLink } from "lucide-react";

const IMSContent = () => {
  return (
    <section className="bg-white py-14 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* TITLE */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-5 sm:mb-6">
          Inventory Management System
        </h2>

        {/* DESCRIPTION */}
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
          A full-stack inventory management solution designed to streamline item
          tracking, enforce secure role-based access, and provide real-time
          reporting across multiple locations. Built with a scalable
          architecture, the system ensures reliability, performance, and
          security for modern business operations.
        </p>

        {/* TECH STACK */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {/* Frontend */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-2 sm:mb-3 text-sm sm:text-base">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              {["React.js", "HTML", "Tailwind CSS", "JavaScript"].map(
                (tech, i) => (
                  <span key={i} className="tag">
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-2 sm:mb-3 text-sm sm:text-base">
              Backend
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Java", "Spring Boot"].map((tech, i) => (
                <span key={i} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Database */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-2 sm:mb-3 text-sm sm:text-base">
              Database
            </h3>
            <div className="flex flex-wrap gap-2">
              {["PostgreSQL", "AWS RDS"].map((tech, i) => (
                <span key={i} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Security */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-2 sm:mb-3 text-sm sm:text-base">
              Security
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Spring Security",
                "JWT Authentication",
                "BCrypt Encryption",
              ].map((tech, i) => (
                <span key={i} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {[
            "Role-based authentication & authorization",
            "Real-time inventory tracking",
            "Multi-location warehouse management",
            "Advanced reporting & analytics dashboard",
          ].map((feature, i) => (
            <div
              key={i}
              className="p-4 sm:p-5 border border-slate-200 rounded-xl bg-slate-50 hover:shadow-md transition"
            >
              <p className="text-slate-700 text-sm sm:text-base">{feature}</p>
            </div>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href="https://inventrax.sytes.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-xl font-semibold hover:bg-amber-500 transition w-full sm:w-auto"
          >
            Live Demo <ExternalLink size={18} />
          </a>

          <a
            href="https://github.com/karenthiran/Inventory-Management-System.git"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-slate-300 px-5 py-3 rounded-xl font-semibold hover:border-amber-500 hover:text-amber-600 transition w-full sm:w-auto"
          >
            GitHub <ExternalLink size={18} />
          </a>
        </div>
      </div>

      {/* TAG STYLE */}
      <style jsx>{`
        .tag {
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 12px;
          color: #334155;
        }

        @media (min-width: 640px) {
          .tag {
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  );
};

export default IMSContent;
