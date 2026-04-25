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
    facebook: "https://www.facebook.com/profile.php?id=100076245941481",
    instagram: "https://www.instagram.com/lookup_lk/",

    details: "/business/lookup",
  },
  {
    id: 2,
    name: "Netpixlabs",
    desc: "A social media agency creating engaging content, high-performing ads, and modern website visuals for brands.",
    image: Netpixlab,
    facebook: "https://www.facebook.com/search/top?q=netpix%20labs",
    instagram: "https://instagram.com",

    details: "/business/netpixlabs",
  },
];

const Business = () => {
  return (
    <section id="ventures" className="py-18 px-6 md:px-20 bg-[#FBFBFD]">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-20 text-center">
        <span className="text-[11px] font-black tracking-[0.2em] text-[#d4a017] uppercase bg-[#d4a017]/10 px-4 py-1.5 rounded-full">
          Creation
        </span>

        <h2 className="text-3xl md:text-5xl font-black text-[#1a1a1a] mt-5 tracking-tight">
          Entrepreneurial <span className="text-[#d4a017]">Ventures</span>
        </h2>

        <div className="w-16 h-1 bg-[#d4a017] mt-6 mx-auto rounded-full"></div>
      </div>

      {/* BETTER GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-[repeat(auto-fit,minmax(300px,380px))] justify-center gap-12">
        {businesses.map((item) => (
          <div
            key={item.id}
            className="group relative w-full bg-white rounded-3xl overflow-hidden border border-gray-100 
            transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
          >
            {/* Image */}
            <div className="relative aspect-[5/4] overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition" />
            </div>

            {/* Content */}
            <div className="p-8 text-center">
              <h4 className="text-2xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#d4a017] transition">
                {item.name}
              </h4>

              <p className="text-gray-500 text-sm leading-relaxed mb-8 h-12 line-clamp-2">
                {item.desc}
              </p>

              {/* Bottom */}
              <div className="flex flex-col items-center gap-5 pt-6 border-t border-gray-100">
                {/* Social */}
                <div className="flex gap-6">
                  <a
                    href={item.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-[#d4a017] hover:scale-110 transition"
                  >
                    <FaInstagram size={20} />
                  </a>

                  <a
                    href={item.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-[#d4a017] hover:scale-110 transition"
                  >
                    <FaFacebook size={20} />
                  </a>
                </div>

                {/* CTA */}
                <a
                  href={item.details}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a1a1a] 
                  hover:text-[#d4a017] transition-all group/link"
                >
                  View Case
                  <FiArrowUpRight
                    className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition"
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
