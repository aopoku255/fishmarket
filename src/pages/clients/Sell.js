import React from "react";
import NavBar from "../../components/clients/NavBar";
import image from "../../assets/images/fish5.jpg";
import logo from "../../assets/images/logo.jpeg";
import { Link } from "react-router-dom";
import Footer from "../../components/clients/Footer";

const Sell = () => {
  return (
    <div>
      <NavBar loggedin={true} />
      <div className="container mt-5">
        <div className="row justify-content-around align-items-center">
          <div className="col">
            <h1 className="fw-bolder display-1">
              Start Selling with <span className="text-success">ESoG</span>
            </h1>
            <p className="fs-3">
              The fastest-growing and preferred acquisition channel for over
              half our multichannel sellers.
            </p>
            <Link
              to="/signup"
              className="btn btn-success rounded-pill btn-lg px-4"
            >
              Sign up
            </Link>
          </div>
          <div className="col">
            <img
              src={image}
              alt=""
              width={700}
              className="img-fluid d-block rounded"
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row my-5">
          <div className="col">
            <div
              className="card bg-dark border-0 rounded"
              style={{ height: "35rem", width: "100%" }}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/0bf8viUAJD0?clip=UgkxlCszwfwdAIOX40go6vLFwXQ78TEBKwUD&amp;clipt=EAAYlMQB"
                title="YouTube video player"
                frameborder="0"
                // allow="accelerometer; autoPlay; clipboardWrite; encryptedMedia; gyroscope; pictureInPicture; webShare "
                allowFullScreen
                className="rounded"
              ></iframe>
            </div>
          </div>
          <div className="col">
            <div
              className="card bg-success  border-0 text-white"
              style={{ height: "35rem", width: "100%" }}
            >
              <div className="container my-3 w-75 mx-auto">
                <h6 className="fw-semibold fs-3">Stephen Farms</h6>
                <p className="my-3 fs-4">
                  "I’ve actually been really impressed—and kind of surprised,
                  quite frankly—at how much ESoG has helped us build the brand;
                  not just on ESoG, but outside of ESoG."
                </p>
                <div className="d-flex align-items-center">
                  <div
                    className="rounded-circle"
                    style={{ width: "4rem", height: "4rem" }}
                  >
                    <img
                      src={image}
                      alt=""
                      className="img-fluid rounded-circle"
                      style={{
                        width: "4rem",
                        height: "4rem",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="mx-2">
                    <p className="mb-0 fw-bold fs-5">Stephen Frimpong</p>
                    <p className="small">Founder</p>
                  </div>
                </div>
                <div className="card border-0 bg-light text-success  my-3">
                  <div className="container p-3 text-center">
                    <div className="row">
                      <div className="col">
                        <p className="fw-bold fs-1 mb-1 text-center">80%</p>
                        <p>
                          of Amazon Customers use Amazon to discover new
                          products or brands
                        </p>
                      </div>
                      <div className="col">
                        <p className="fw-bold fs-1 mb-1 text-center">800K</p>
                        <p>
                          fretailers are in Brand Registry, unlocking our
                          powerful tools
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sell;
