import React from "react";
import HeroIMS from "../components/Projects/IMS/HeroIMS";
import IMSContent from "../components/Projects/IMS/IMSContent";
import WorkflowSection from "../components/Projects/IMS/WorkflowSection";
import RequirementAnalysis from "../components/Projects/IMS/RequirementAnalysis";

const ProjectIMS = () => {
  return (
    <div>
      <HeroIMS />
      <IMSContent />
      <RequirementAnalysis />
      <WorkflowSection />
    </div>
  );
};

export default ProjectIMS;
