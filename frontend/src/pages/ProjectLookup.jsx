import React from "react";
import HeroLookup from "../components/Projects/Lookup/HeroLookup";
import VedioSectionLookup from "../components/Projects/Lookup/VedioSectionLookup";
import LookupContent from "../components/Projects/Lookup/LookupContent";

const ProjectLookup = () => {
  return (
    <div>
      <VedioSectionLookup />
      <LookupContent />
    </div>
  );
};

export default ProjectLookup;
