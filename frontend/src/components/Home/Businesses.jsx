import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import Netpixlab from "../../assets/Images/netpix.jpg";
import LookupImg from "../../assets/Images/lookuplogo.jpg";

const businesses = [
  {
    id: 1,
    name: "Lookup",
    desc: "Custom photo frame design and framing with delivery across Sri Lanka.",
    image: LookupImg,
    instagram: "https://www.instagram.com/lookup_lk/",
    facebook: "https://www.facebook.com/profile.php?id=100076245941481",
    details: "/business/lookup",
  },
  {
    id: 2,
    name: "Netpixlabs",
    desc: "A creative studio specializing in content creation, branding, and digital growth.",
    image: Netpixlab,
    instagram: "https://instagram.com",
    facebook: "https://www.facebook.com/search/top?q=netpix%20labs",
    details: "/business/netpixlabs",
  },
];

const Business = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-[#FBFBFD]">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <span className="text-[11px] font-black tracking-[0.2em] text-[#d4a017] uppercase bg-[#d4a017]/10 px-3 py-1 rounded-full">
          Creation
        </span>

        <h2 className="text-3xl md:text-5xl font-black text-[#1a1a1a] mt-4 tracking-tight">
          Entrepreneurial <span className="text-[#d4a017]">Ventures</span>
        </h2>

        <div className="w-12 h-1 bg-[#d4a017] mt-6 mx-auto rounded-full"></div>
      </div>

      {/* PERFECT CENTERED GRID */}
      <div className="max-w-5xl mx-auto grid grid-cols-[repeat(auto-fit,minmax(280px,320px))] justify-center gap-10">
        {businesses.map((item) => (
          <div
            key={item.id}
            className="group relative w-full bg-white rounded-3xl overflow-hidden border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
            </div>

            {/* Content */}
            <div className="p-8 text-center">
              <h4 className="text-xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#d4a017] transition-colors">
                {item.name}
              </h4>

              <p className="text-gray-500 text-sm leading-relaxed mb-6 h-10 line-clamp-2">
                {item.desc}
              </p>

              {/* Bottom */}
              <div className="flex flex-col items-center gap-4 pt-6 border-t border-gray-50">
                <div className="flex gap-5">
                  {item.instagram && (
                    <a
                      href={item.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-[#E1306C] transition-colors"
                    >
                      <FaInstagram size={18} />
                    </a>
                  )}

                  {item.facebook && (
                    <a
                      href={item.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-[#1877F2] transition-colors"
                    >
                      <FaFacebook size={18} />
                    </a>
                  )}
                </div>

                <a
                  href={item.details}
                  className="inline-flex items-center gap-1 text-sm font-bold text-[#1a1a1a] hover:gap-2 transition-all group/link"
                >
                  View Case
                  <FiArrowUpRight
                    className="text-[#d4a017] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                    size={16}
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Business;
