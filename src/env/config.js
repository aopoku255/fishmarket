import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/clients/Home";
import Error from "../pages/Error";

const Config = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default Config;
