import React from "react";
import NavBar from "../../components/clients/NavBar";
import fishimage from "../../assets/images/fish2.jpg";
import { BsPlayCircle, BsWindows, BsStack } from "react-icons/bs";
import { GiDeliveryDrone } from "react-icons/gi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="bg bg_color">
        <NavBar />
        <div className="main d-sm-flex justify-content-center align-items-center">
          <div className="col-sm-6">
            {/* <img
              src={fishimage}
              alt=""
              width={400}
              height={400}
              className="mx-auto d-block text-center rounded-circle"
            /> */}
          </div>
          <div className="col-sm-6 p-sm-0 p-3">
            <h1 className="text_header">Fish Delivery & Easy Pickups</h1>
            <p className="text_para">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo fugit qui et libero commodi nihil quibusdam quis
              repellat esse quam.
            </p>
            <div className="d-flex">
              <Link to="" className="btn_color">
                Get Started
              </Link>
              <Link to="" className="btn_color">
                Watching
                <span>
                  <BsPlayCircle className="mx-1" />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="items_card card border-0 shadow-lg d-sm-flex d-none">
          <div
            className="d-flex justify-content-around align-items-center"
            style={{ height: "4rem" }}
          >
            <div className="d-flex align-items-center">
              <GiDeliveryDrone />
              <span className="mx-1">Home Delivery</span>
            </div>
            <div className="d-flex align-items-center">
              <BsWindows />
              <span className="mx-1">Window</span>
            </div>
            <div className="d-flex align-items-center">
              <BsStack />
              <span className="mx-1">Products</span>
            </div>
            <div className="d-flex align-items-center">
              <GiDeliveryDrone />
              <span className="mx-1">Home Delivery</span>
            </div>
          </div>
        </div>
      </div>
      <section className="bg "></section>
    </>
  );
};

export default Home;
