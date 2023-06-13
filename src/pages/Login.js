import React from "react";
import { Link } from "react-router-dom";
import google from "../assets/images/google.svg";
import { RiEyeCloseFill, RiEyeFill } from "react-icons/ri";
import { CiLock, CiMail } from "react-icons/ci";
import { useState } from "react";
import logo from "../assets/images/logo.jpeg";
// import google from "../assets/images/google.svg";
import { FiLock } from "react-icons/fi";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

const Login = () => {
  const [isView, setIsView] = useState(false);
  const handleClick = () => {
    setIsView(!isView);
  };
  return (
    <Modal isOpen={true} centered backdrop={false} fade={false}>
      <ModalHeader className="bg-success text-white">
        <h4 className="small">Sign in with your account</h4>
      </ModalHeader>
      <ModalBody>
        <div className="container">
          <img
            src={logo}
            width={100}
            alt=""
            className="d-block mx-auto mb-5"
            style={{ pointerEvents: "none" }}
          />
          <h4 className="fw-bold text-secondary opacity-75 mb-3">
            Welcome Back
          </h4>
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control border border-success text-success"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label
              for="floatingInput"
              className="text-success opacity-50 d-flex align-items-center justify-content-between"
            >
              <span>Email address</span>
              <CiMail size={25} />
            </label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control border border-success text-success"
              id="floatingPassword"
              placeholder="Password"
            />
            <label
              for="floatingInput"
              className="text-success opacity-50 d-flex align-items-center justify-content-between"
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
          <Link
            to="/farmer-dashboard"
            className="btn btn-success d-flex w-100 justify-content-center btn-lg"
          >
            Sign in
          </Link>
          <button className="btn btn-dark d-flex w-100 justify-content-center align-items-center btn-lg my-4">
            <img src={google} alt="" width={20} />
            <span className="mx-2">Continue with Google</span>
          </button>

          <p className="text-center text-secondary">
            Don't have an account?{" "}
            <Link to="/signup" className="text-success">
              Sign up
            </Link>
          </p>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default Login;
