import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_center">
        <div className="row">
          <div className="col-md-3">
            <h1>Location</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              illum quis vitae aut quo sed cum minima nihil omnis laborum.
            </p>
          </div>
          <div className="col-md-3">
            <h1>Location</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              illum quis vitae aut quo sed cum minima nihil omnis laborum.
            </p>
          </div>
          <div className="col-md-3">
            <h1>Location</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              illum quis vitae aut quo sed cum minima nihil omnis laborum.
            </p>
          </div>
          <div className="col-md-3">
            <h1>Location</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              illum quis vitae aut quo sed cum minima nihil omnis laborum.
            </p>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <p>
          copyright &copy; 2022 <Link to="">Farmline</Link> all right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
