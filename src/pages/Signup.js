import React, { useState } from "react";
import { Link } from "react-router-dom";
import google from "../assets/images/google.svg";
import { RiEyeCloseFill, RiEyeFill } from "react-icons/ri";
const Signup = () => {
  const [isView, setIsView] = useState(false);
  const [isView1, setIsView1] = useState(false);
  const handleClick = () => {
    setIsView(!isView);
  };
  const handleClick2 = () => {
    setIsView1(!isView1);
  };
  return (
    <div className="login_container">
      <div className="login_card">
        <div className="mt-4 mx-4">
          <h3 className="logo">Logo</h3>
          <p className="login_card__text text-center">Create an account</p>
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
          <div className="password">
            <input
              type={isView1 ? "text" : "password"}
              placeholder="Confirm Password"
              className="form_control border-0"
            />
            {isView1 ? (
              <RiEyeFill className="icon" onClick={handleClick2} />
            ) : (
              <RiEyeCloseFill className="icon" onClick={handleClick2} />
            )}
          </div>
          <div className="d-flex justify-content-between align-items-center"></div>
          <input type="submit" value="Sign in" className="submit" />
          <button className="submit google_btn d-flex align-items-center justify-content-center">
            <img src={google} alt="" width={10} className="mx-1" />
            Continue with Google
          </button>
          <div className="text-center small_text mt-3">
            Already have account?{" "}
            <Link to="/login" className="text-white">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
