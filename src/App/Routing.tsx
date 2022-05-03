import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../Module/Pages/Homepage";

const Routing = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routing;
