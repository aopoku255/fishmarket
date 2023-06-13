import React from "react";
import { Collapse, Navbar, NavbarBrand, NavbarToggler } from "reactstrap";
import { BsSearch, BsBag, BsList, BsCart4 } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/images/logo.jpeg";
import { FaRegUserCircle, FaUser } from "react-icons/fa";
const NavBar = (props) => {
  const [focus, setFocus] = useState(false);
  const handleFocus = () => {
    setFocus(true);
  };
  return (
    <Navbar className={props.bg} color={props.color || "white"}>
      <div className="container d-flex justify-content-between align-items-center">
        <NavbarBrand href="/" className="text-white">
          <img src={logo} alt="" className="navbar-brand rounded" width={100} />
        </NavbarBrand>
        <div className="d-sm-flex d-none align-items-center header">
          <NavLink
            to="/"
            className="header_navs bold-text rounded"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#fff",
                    backgroundColor: "green",
                    padding: "0.2rem 1rem",
                    transition: "0.4s all",
                  }
                : { color: "green" }
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className="header_navs bold-text rounded"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#fff",
                    backgroundColor: "green",
                    padding: "0.2rem 1rem",
                    transition: "0.4s all",
                  }
                : { color: "green" }
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/window"
            className="header_navs bold-text rounded"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#fff",
                    backgroundColor: "green",
                    padding: "0.2rem 1rem",
                    transition: "0.4s all",
                  }
                : { color: "green" }
            }
          >
            Window
          </NavLink>
          <NavLink
            to="/sell"
            className="header_navs bold-text rounded"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#fff",
                    backgroundColor: "green",
                    padding: "0.2rem 1rem",
                    transition: "0.4s all",
                  }
                : { color: "green" }
            }
          >
            Sell
          </NavLink>
          <div className="header_h-line"></div>
          {props.loggedin ? (
            <>
              <div
                className="rounded-circle d-flex align-items-center justify-content-center text-success"
                style={{ width: "3rem", height: "3rem", cursor: "pointer" }}
              >
                <FaRegUserCircle size={40} />
              </div>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="login_btn btn btn-outline-success"
              >
                sign in
              </NavLink>

              <NavLink href="" className="text-success mx-3 cart">
                <BsCart4 size={30} />
                <span className="cart_num">0</span>
              </NavLink>
            </>
          )}
        </div>

        <div className="d-sm-none">
          <BsList color="white" />
        </div>
      </div>
    </Navbar>
  );
};

export default NavBar;
