import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Example pages (create these files)
import Home from "../pages/Home";

const Approutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Approutes;
