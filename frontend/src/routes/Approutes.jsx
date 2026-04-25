import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "../layout/MainLayout";

// Pages
import Home from "../pages/Home";
import ProjectIMS from "../pages/ProjectIMS";

const Approutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout Wrapper */}
        <Route path="/" element={<MainLayout />}>
          {/* Pages inside Outlet */}
          <Route index element={<Home />} />
          <Route path="project-ims" element={<ProjectIMS />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Approutes;
