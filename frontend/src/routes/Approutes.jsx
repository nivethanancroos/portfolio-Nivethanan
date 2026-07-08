import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
// Layout
import MainLayout from "../layout/MainLayout";

// Pages
import Home from "../pages/Home";
import ProjectIMS from "../pages/ProjectIMS";
import ProjectLookup from "../pages/ProjectLookup";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Approutes;
