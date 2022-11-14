import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/clients/Footer";
import NavBar from "../components/clients/NavBar";
import FarmerDashboard from "../pages/business/FarmerDashboard";
import Home from "../pages/clients/Home";
import Products from "../pages/clients/Products";
import Window from "../pages/clients/Window";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const Config = () => {
  return (
    <Router>
      {/* <NavBar bg="bg-dark" /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/window" element={<Window />} />
        <Route exact path="*" element={<Error />} />
        {/* Farmer Dashboard */}
        <Route exact path="farmer-dashboard" element={<FarmerDashboard />} />
      </Routes>
    </Router>
  );
};

export default Config;
