import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import IMS from "../../../assets/Images/IMS.png";

const HeroIMS = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <img
        src={IMS}
        alt="Inventory Management System"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </section>
  );
};

export default HeroIMS;
