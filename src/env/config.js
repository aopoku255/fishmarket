import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/clients/Home";
import Products from "../pages/clients/Products";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const Config = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default Config;
