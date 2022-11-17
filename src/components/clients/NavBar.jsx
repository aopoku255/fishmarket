import React from "react";
import { Navbar, NavbarBrand, NavbarToggler, NavLink } from "reactstrap";
import { BsSearch, BsBag, BsList } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
const NavBar = (props) => {
  const [focus, setFocus] = useState(false);
  const handleFocus = () => {
    setFocus(true);
  };
  return (
    <Navbar className={props.bg}>
      <div className="container d-flex justify-content-between align-items-center">
        <NavbarBrand href="/" className="text-white">
          ESOG
        </NavbarBrand>
        <div className="d-sm-flex d-none align-items-center header">
          <NavLink href="/" className="header_navs bold-text">
            Home
          </NavLink>
          <NavLink href="/products" className="header_navs bold-text ">
            Products
          </NavLink>
          <NavLink href="/window" className="header_navs bold-text ">
            Window
          </NavLink>
          <div className="header_h-line"></div>
          <NavLink href="/login" className=" bold-text header_signup__btn">
            sign in
          </NavLink>
          {/* <NavLink href="" className=" bold-text  header_signup__btn fill">
            create account
          </NavLink> */}

          <NavLink href="" className="header_navs header_icons">
            <BsSearch />
          </NavLink>
          <NavLink
            href=""
            className="header_navs header_icons d-flex align-items-center"
          >
            <BsBag />
            <b className="mx-1 bold-text">0</b>
          </NavLink>
        </div>

        <div className="d-sm-none">
          <BsList color="white" />
        </div>
      </div>
    </Navbar>
  );
};

export default NavBar;
