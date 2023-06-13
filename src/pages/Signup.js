import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import google from "../assets/images/google.svg";
import { RiEyeCloseFill, RiEyeFill } from "react-icons/ri";
import {
  Col,
  Collapse,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  Nav,
  NavItem,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import { HiPhone } from "react-icons/hi";
import { CgRename } from "react-icons/cg";
import { CiLock, CiMail } from "react-icons/ci";
import logo from "../assets/images/logo.jpeg";

const Signup = () => {
  const [isView, setIsView] = useState(false);
  const [isView1, setIsView1] = useState(false);
  const [tabindex, setTabIndex] = useState("1");
  const handleClick = () => {
    setIsView(!isView);
  };
  const handleClick2 = () => {
    setIsView1(!isView1);
  };

  const handleTabClick = (e) => {
    setTabIndex(e);
  };
  return (
    <div className="login_container">
      <Modal
        isOpen={true}
        centered
        className=""
        fade={false}
        scrollable={true}
        backdrop={false}
        // fullscreen
        size="md"
      >
        <ModalHeader className="bg-success text-white">
          <h4 className="small">Choose Signup As</h4>
        </ModalHeader>
        <div>
          <div
            style={{
              minHeight: "40rem",
              height: "40rem",
              // overflowY: "scroll",
            }}
          >
            <ModalBody>
              <img
                src={logo}
                width={100}
                className="d-block mx-auto mb-5 "
                alt=""
                style={{ pointerEvents: "none" }}
              />
              <Nav
                tabs
                className="tab_container pb-1 d-flex justify-content-between align-items-center"
                style={{ height: "2.7rem" }}
              >
                <div className="d-md-flex">
                  <NavItem>
                    <NavLink
                      className="tablink text-success"
                      onClick={(e) => handleTabClick("1")}
                      style={
                        tabindex === "1"
                          ? {
                              backgroundColor: "white",
                              color: "green",
                              // borderRadius: "5px",
                              borderTop: "1px solid #B5B5C3",
                              borderLeft: "1px solid #B5B5C3",
                              borderRight: "1px solid #B5B5C3",
                              borderTopRightRadius: "5px",
                              borderTopLeftRadius: "5px",
                            }
                          : {}
                      }
                    >
                      User
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="tablink text-success"
                      onClick={(e) => handleTabClick("2")}
                      style={
                        tabindex === "2"
                          ? {
                              backgroundColor: "white",
                              color: "green",
                              // borderRadius: "5px",
                              borderTop: "1px solid #B5B5C3",
                              borderLeft: "1px solid #B5B5C3",
                              borderRight: "1px solid #B5B5C3",
                              borderTopRightRadius: "5px",
                              borderTopLeftRadius: "5px",
                            }
                          : {}
                      }
                    >
                      Wholesaler
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="tablink text-success"
                      onClick={(e) => handleTabClick("3")}
                      style={
                        tabindex === "3"
                          ? {
                              backgroundColor: "white",
                              color: "green",
                              // borderRadius: "5px",
                              borderTop: "1px solid #B5B5C3",
                              borderLeft: "1px solid #B5B5C3",
                              borderRight: "1px solid #B5B5C3",
                              borderTopRightRadius: "5px",
                              borderTopLeftRadius: "5px",
                            }
                          : {}
                      }
                    >
                      Farmer
                    </NavLink>
                  </NavItem>
                </div>
              </Nav>

              <TabContent className="tab_body my-3" activeTab={tabindex}>
                <TabPane tabId="1">
                  <div className="container">
                    {/* <img
                      src={logo}
                      width={100}
                      alt=""
                      className="d-block mx-auto my-4"
                    /> 
                    {/* <h4 className="fw-bold text-secondary opacity-75 mb-3">
                      Welcome Back
                    </h4> */}
                    <div class="form-floating mb-3">
                      <input
                        type="email"
                        class="form-control border border-success text-success"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label
                        for="floatingInput"
                        className="text-success  d-flex align-items-center justify-content-between"
                      >
                        <span>Email address</span>
                        <CiMail size={25} />
                      </label>
                    </div>
                    <div class="form-floating mb-3 ">
                      <input
                        type="password"
                        class="form-control border border-success text-success"
                        id="floatingPassword"
                        placeholder="Password"
                      />
                      <label
                        for="floatingInput"
                        className="text-success  d-flex align-items-center justify-content-between"
                      >
                        <span>Password</span>
                        <CiLock size={25} />
                      </label>
                    </div>
                    <div class="form-floating ">
                      <input
                        type="password"
                        class="form-control border border-success text-success"
                        id="floatingPassword"
                        placeholder="Password"
                      />
                      <label
                        for="floatingInput"
                        className="text-success  d-flex align-items-center justify-content-between"
                      >
                        <span>Confirm Password</span>
                        <CiLock size={25} />
                      </label>
                    </div>
                    <div className="d-flex align-items-center justify-content-between my-4">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          class="form-check-label text-secondary"
                          for="flexCheckDefault"
                        >
                          Show Password
                        </label>
                      </div>
                      <a href="" className="text-success">
                        Forgotten password
                      </a>
                    </div>
                    <button className="btn btn-success d-flex w-100 justify-content-center btn-lg">
                      Sign up
                    </button>
                    <button className="btn btn-dark d-flex w-100 justify-content-center align-items-center btn-lg my-4">
                      <img src={google} alt="" width={20} />
                      <span className="mx-2">Continue with Google</span>
                    </button>

                    <p className="text-center text-secondary">
                      Already have an account?{" "}
                      <Link to="/login" className="text-success">
                        Sign in
                      </Link>
                    </p>
                  </div>
                </TabPane>
                <TabPane tabId="2">
                  <div className="container">
                    {/* <img
                      src={logo}
                      width={100}
                      alt=""
                      className="d-block mx-auto my-4"
                    /> */}
                    {/* <h4 className="fw-bold text-secondary opacity-75 mb-3">
                      Welcome Back
                    </h4> */}
                    <div class="form-floating mb-3 ">
                      <input
                        type="email"
                        class="form-control border border-success text-success"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label
                        for="floatingInput"
                        className="text-success  d-flex align-items-center justify-content-between"
                      >
                        <span>Business Name</span>
                        <CgRename size={25} />
                      </label>
                    </div>
                    <div class="form-floating mb-3 ">
                      <input
                        type="email"
                        class="form-control border border-success text-success "
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label
                        for="floatingInput"
                        className="text-success  d-flex align-items-center justify-content-between"
                      >
                        <span>Email address</span>
                        <CiMail size={25} />
                      </label>
                    </div>
                    <div class="mb-3">
                      <select
                        name=""
                        id=""
                        className="form-select py-3 border border-success text-success"
                      >
                        <option value="" className=" text-success">
                          Select category
                        </option>
                        <option value="" className="">
                          Fish Farm
                        </option>
                      </select>
                    </div>
                    <div class="form-floating ">
                      <input
                        type="password"
                        class="form-control border border-success text-success"
                        id="floatingPassword"
                        placeholder="Password"
                      />
                      <label
                        for="floatingInput"
                        className="text-success  d-flex align-items-center justify-content-between"
                      >
                        <span>Password</span>
                        <CiLock size={25} />
                      </label>
                    </div>
                    <div className="d-flex align-items-center justify-content-between my-4">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          class="form-check-label text-secondary"
                          for="flexCheckDefault"
                        >
                          Show Password
                        </label>
                      </div>
                      <a href="" className="text-success">
                        Forgotten password
                      </a>
                    </div>
                    <button className="btn btn-success d-flex w-100 justify-content-center btn-lg">
                      Sign up
                    </button>
                    {/* <button className="btn btn-dark d-flex w-100 justify-content-center align-items-center btn-lg my-4">
                      <img src={google} alt="" width={20} />
                      <span className="mx-2">Continue with Google</span>
                    </button> */}

                    <p className="text-center text-secondary mt-4">
                      Already have an account?{" "}
                      <Link to="/login" className="text-success">
                        Sign in
                      </Link>
                    </p>
                  </div>
                </TabPane>
                <TabPane tabId="3">
                  <div className="container">
                    {/* <img
                      src={logo}
                      width={100}
                      alt=""
                      className="d-block mx-auto my-4"
                    /> */}
                    {/* <h4 className="fw-bold text-secondary opacity-75 mb-3">
                      Welcome Back
                    </h4> */}
                    <div class="form-floating mb-3 ">
                      <input
                        type="email"
                        class="form-control border border-success text-success"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label
                        for="floatingInput"
                        className="text-success  d-flex align-items-center justify-content-between"
                      >
                        <span>Farm Name</span>
                        <CgRename size={25} />
                      </label>
                    </div>
                    <div class="form-floating mb-3 ">
                      <input
                        type="email"
                        class="form-control border border-success text-success"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label
                        for="floatingInput"
                        className="text-success  d-flex align-items-center justify-content-between"
                      >
                        <span>Email address</span>
                        <CiMail size={25} />
                      </label>
                    </div>
                    <div class="mb-3">
                      <select
                        name=""
                        id=""
                        className="form-select py-3 border border-success  text-success"
                      >
                        <option value="" className="">
                          Select farm category
                        </option>
                        <option value="" className="">
                          Fish Farm
                        </option>
                      </select>
                    </div>
                    <div class="form-floating ">
                      <input
                        type="password"
                        class="form-control border border-success text-success"
                        id="floatingPassword"
                        placeholder="Password"
                      />
                      <label
                        for="floatingInput"
                        className="text-success  d-flex align-items-center justify-content-between"
                      >
                        <span>Password</span>
                        <CiLock size={25} />
                      </label>
                    </div>
                    <div className="d-flex align-items-center justify-content-between my-4">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          class="form-check-label text-secondary"
                          for="flexCheckDefault"
                        >
                          Show Password
                        </label>
                      </div>
                      <a href="" className="text-success">
                        Forgotten password
                      </a>
                    </div>
                    <button className="btn btn-success d-flex w-100 justify-content-center btn-lg">
                      Sign up
                    </button>
                    {/* <button className="btn btn-dark d-flex w-100 justify-content-center align-items-center btn-lg my-4">
                      <img src={google} alt="" width={20} />
                      <span className="mx-2">Continue with Google</span>
                    </button> */}

                    <p className="text-center text-secondary mt-4">
                      Already have an account?{" "}
                      <Link to="/login" className="text-success">
                        Sign in
                      </Link>
                    </p>
                  </div>
                </TabPane>
              </TabContent>
            </ModalBody>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Signup;
