import React from "react";
import { Link } from "react-router-dom";
import google from "../assets/images/google.svg";
import { RiEyeCloseFill, RiEyeFill } from "react-icons/ri";
import { useState } from "react";

const Login = () => {
  const [isView, setIsView] = useState(false);
  const handleClick = () => {
    setIsView(!isView);
  };
  return (
    <div className="login_container">
      <div className="login_card">
        <div className="mt-4 mx-4">
          <h3 className="logo">Logo</h3>
          <p className="login_card__text text-center">
            Sign in to your account
          </p>
        </div>
        <form
          action=""
          className="form d-flex flex-column justify-content-center px-4"
        >
          <div>
            <input
              type="text"
              placeholder="email address"
              className="form_control border-0"
            />
          </div>
          <div className="password">
            <input
              type={isView ? "text" : "password"}
              placeholder="Password"
              className="form_control border-0"
            />
            {isView ? (
              <RiEyeFill className="icon" onClick={handleClick} />
            ) : (
              <RiEyeCloseFill className="icon" onClick={handleClick} />
            )}
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center justify-content-center">
              <input type="checkbox" className="border-0" />
              <span className="small_text mx-1">Remember Me</span>
            </div>
            <Link to="" className="small_text forgotten">
              Forgotten password
            </Link>
          </div>
          <input type="submit" value="Sign in" className="submit mt-3" />
          <button className="submit google_btn d-flex align-items-center justify-content-center">
            <img src={google} alt="" width={10} className="mx-1" />
            Continue with Google
          </button>
          <div className="text-center small_text mt-3">
            Don't have account?{" "}
            <Link to="/signup" className="text-white">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
