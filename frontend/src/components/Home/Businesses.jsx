// import React from "react";
// import { FiArrowUpRight } from "react-icons/fi";
// import { FaInstagram, FaFacebook } from "react-icons/fa";
// import Netpixlab from "../../assets/Images/netpix.jpg";
// import LookupImg from "../../assets/Images/lookuplogo.jpg";

// const businesses = [
//   {
//     id: 1,
//     name: "Lookup",
//     desc: "Custom photo frame design and framing with delivery across Sri Lanka.",
//     image: LookupImg,
//     facebook: "https://www.facebook.com/profile.php?id=100076245941481",
//     instagram: "https://www.instagram.com/lookup_lk/",

//     details: "/business/lookup",
//   },
//   {
//     id: 2,
//     name: "Netpixlabs",
//     desc: "A social media agency creating engaging content, high-performing ads, and modern website visuals for brands.",
//     image: Netpixlab,
//     facebook: "https://www.facebook.com/search/top?q=netpix%20labs",
//     instagram: "https://instagram.com",

//     details: "/business/netpixlabs",
//   },
// ];

// const Business = () => {
//   return (
//     <section id="ventures" className="py-18 px-6 md:px-20 bg-[#FBFBFD]">
//       {/* Header */}
//       <div className="max-w-7xl mx-auto mb-20 text-center">
//         <span className="text-[11px] font-black tracking-[0.2em] text-[#d4a017] uppercase bg-[#d4a017]/10 px-4 py-1.5 rounded-full">
//           Creation
//         </span>

//         <h2 className="text-3xl md:text-5xl font-black text-[#1a1a1a] mt-5 tracking-tight">
//           Independent <span className="text-[#d4a017]">Ventures</span>
//         </h2>

//         <div className="w-16 h-1 bg-[#d4a017] mt-6 mx-auto rounded-full"></div>
//       </div>

//       {/* BETTER GRID */}
//       <div className="max-w-6xl mx-auto grid grid-cols-[repeat(auto-fit,minmax(300px,380px))] justify-center gap-12">
//         {businesses.map((item) => (
//           <div
//             key={item.id}
//             className="group relative w-full bg-white rounded-3xl overflow-hidden border border-gray-100
//             transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
//           >
//             {/* Image */}
//             <div className="relative aspect-[5/4] overflow-hidden">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition" />
//             </div>

//             {/* Content */}
//             <div className="p-8 text-center">
//               <h4 className="text-2xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#d4a017] transition">
//                 {item.name}
//               </h4>

//               <p className="text-gray-500 text-sm leading-relaxed mb-8 h-12 line-clamp-2">
//                 {item.desc}
//               </p>

//               {/* Bottom */}
//               <div className="flex flex-col items-center gap-5 pt-6 border-t border-gray-100">
//                 {/* Social */}
//                 <div className="flex gap-6">
//                   <a
//                     href={item.instagram}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="text-gray-400 hover:text-[#d4a017] hover:scale-110 transition"
//                   >
//                     <FaInstagram size={20} />
//                   </a>

//                   <a
//                     href={item.facebook}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="text-gray-400 hover:text-[#d4a017] hover:scale-110 transition"
//                   >
//                     <FaFacebook size={20} />
//                   </a>
//                 </div>

//                 {/* CTA */}
//                 <a
//                   href={item.details}
//                   className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a1a1a]
//                   hover:text-[#d4a017] transition-all group/link"
//                 >
//                   View Case
//                   <FiArrowUpRight
//                     className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition"
//                     size={16}
//                   />
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Business;

import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import Netpixlab from "../../assets/Images/netpix.jpg";
import LookupImg from "../../assets/Images/lookuplogo.jpg";

const businesses = [
  {
    id: 1,
    name: "Lookup",
    role: "Founder • UI/UX Designer • Frontend Developer",
    desc: "Built and manage an online photo framing and custom artwork business. Designed the complete user experience, developed the website, optimized SEO and performance, and managed digital marketing campaigns while delivering products across Sri Lanka.",
    image: LookupImg,
    facebook: "https://www.facebook.com/profile.php?id=100076245941481",
    instagram: "https://www.instagram.com/lookup_lk/",
    technologies: [
      "React",
      "Tailwind CSS",
      "Figma",
      "UI/UX",
      "SEO",
      "Branding",
    ],
  },
  {
    id: 2,
    name: "Netpixlabs",
    role: "Co-Founder • UI/UX Designer • Frontend Developer",
    desc: "Creative digital agency delivering responsive websites, UI/UX designs, branding, social media creatives, and digital marketing solutions for startups and businesses using modern web technologies.",
    image: Netpixlab,
    facebook: "https://www.facebook.com/search/top?q=netpix%20labs",
    instagram:
      "https://www.instagram.com/netpix_labs?igsh=MWZ1aHRzZncxdnR0cA%3D%3D&utm_source=qr",
    technologies: [
      "React",
      "Tailwind CSS",
      "Figma",
      "Social Media",
      "Branding",
      "Marketing",
    ],
  },
];

const Business = () => {
  return (
    <section id="ventures" className="py-16 px-6 md:px-16 bg-[#FBFBFD]">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <span className="inline-block text-[11px] font-black tracking-[0.2em] uppercase text-[#d4a017] bg-[#d4a017]/10 px-4 py-2 rounded-full">
          Independent Work
        </span>

        <h2 className="mt-4 text-3xl md:text-4xl font-black tracking-tight text-[#1a1a1a]">
          Independent <span className="text-[#d4a017]">Ventures</span>
        </h2>

        <p className="max-w-2xl mx-auto mt-4 text-gray-500 leading-7">
          Alongside my academic and professional journey, I've built and managed
          independent ventures where I designed user experiences, developed
          websites, created brand identities, and delivered digital solutions
          for real clients.
        </p>

        <div className="w-14 h-1 bg-[#d4a017] rounded-full mx-auto mt-4"></div>
      </div>

      {/* Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {businesses.map((item) => (
          <div
            key={item.id}
            className="group overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
          >
            {/* Image */}
            <div className="relative aspect-square overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#1a1a1a] transition group-hover:text-[#d4a017]">
                {item.name}
              </h3>

              <p className="mt-1 text-sm font-semibold text-[#d4a017]">
                {item.role}
              </p>

              <p className="mt-4 text-gray-600 leading-6 text-[15px]">
                {item.desc}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-5">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 text-[11px] font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-between mt-6 pt-5 border-t border-gray-100">
                <div className="flex gap-3">
                  <a
                    href={item.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-500 hover:bg-[#d4a017] hover:text-white transition"
                  >
                    <FaInstagram size={18} />
                  </a>

                  <a
                    href={item.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-500 hover:bg-[#d4a017] hover:text-white transition"
                  >
                    <FaFacebook size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Business;
