import React from "react";
import HeroIMS from "../components/Projects/IMS/HeroIMS";
import IMSContent from "../components/Projects/IMS/IMSContent";
import WorkflowSection from "../components/Projects/IMS/WorkflowSection";
import RequirementAnalysis from "../components/Projects/IMS/RequirementAnalysis";
import VideoSection from "../components/Projects/IMS/VideoSection";

const ProjectIMS = () => {
  return (
    <div>
      <VideoSection />
      <IMSContent />

      <RequirementAnalysis />
      <WorkflowSection />
    </div>
  );
};

export default ProjectIMS;
