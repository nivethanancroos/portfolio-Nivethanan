import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
// Layout
import MainLayout from "../layout/MainLayout";

// Pages
import Home from "../pages/Home";
import ProjectIMS from "../pages/ProjectIMS";
import ProjectLookup from "../pages/ProjectLookup";
import ProjectGz from "../pages/ProjectGz";

const Approutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        {/* Layout Wrapper */}
        <Route path="/" element={<MainLayout />}>
          {/* Pages inside Outlet */}
          <Route index element={<Home />} />
          <Route path="project-ims" element={<ProjectIMS />} />
          <Route path="project-lookup" element={<ProjectLookup />} />
          <Route path="project-gz" element={<ProjectGz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Approutes;
