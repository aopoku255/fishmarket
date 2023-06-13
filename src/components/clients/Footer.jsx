import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

const Footer = () => {
  return (
    <footer id="footer" className="mt-5 bg-success">
      <div className="footer-top bg-success">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <img src={logo} alt="" width={100} className="img-fluid" />
              <p>
                A108 Adam Street <br />
                New York, NY 535022
                <br />
                United States <br />
                <strong>Phone:</strong> +1 5589 55488 55
                <br />
                <strong>Email:</strong> info@example.com
                <br />
              </p>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <FiChevronRight /> <a href="#">Home</a>
                </li>
                <li>
                  <FiChevronRight /> <a href="#">About us</a>
                </li>
                <li>
                  <FiChevronRight /> <a href="#">Services</a>
                </li>
                <li>
                  <FiChevronRight /> <a href="#">Terms of service</a>
                </li>
                <li>
                  <FiChevronRight /> <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <FiChevronRight /> <a href="#">Web Design</a>
                </li>
                <li>
                  <FiChevronRight /> <a href="#">Web Development</a>
                </li>
                <li>
                  <FiChevronRight /> <a href="#">Product Management</a>
                </li>
                <li>
                  <FiChevronRight /> <a href="#">Marketing</a>
                </li>
                <li>
                  <FiChevronRight /> <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Join Our Newsletter</h4>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </p>
              <form>
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container d-md-flex py-4 align-items-center">
        <div className="me-md-auto text-center text-md-start">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>ESoG</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            {/* Designed By <a href="">ProfandMedia</a> */}
          </div>
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0">
          <a href="#" className="twitter">
            <FaTwitter />
          </a>
          <a href="#" className="facebook">
            <FaFacebookF />
          </a>
          <a href="#" className="instagram">
            <FaInstagram />
          </a>

          <a href="#" className="linkedin">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
