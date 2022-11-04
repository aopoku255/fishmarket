import React from "react";
import NavBar from "../../components/clients/NavBar";
import fishimage from "../../assets/images/fish2.jpg";
import {
  BsPlayCircle,
  BsAlarm,
  BsStack,
  BsArrowRightCircle,
} from "react-icons/bs";
import { GiDeliveryDrone } from "react-icons/gi";
import fish from "../../assets/images/fish4.jpg";
import { Link } from "react-router-dom";
import ItemsCard from "../../components/clients/ItemsCard";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import Cards from "../../components/clients/Cards";
import LargeText from "../../components/clients/LargeText";
import ItemSalesCard from "../../components/clients/ItemSalesCard";
import Footer from "../../components/clients/Footer";

const Home = () => {
  return (
    <>
      <div className="bg bg_color">
        <NavBar />
        <div className="main d-md-flex justify-content-center align-items-center">
          <div className="col-sm-6 d-none">
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
        <ItemsCard />
      </div>
      <section className="bg">
        <div className="container">
          <LargeText coloredText="Frequently" text="Purchased" />
          <div className="row gy-4">
            <div className="col-sm-4">
              <Cards />
            </div>
            <div className="col-sm-4">
              <Cards />
            </div>
            <div className="col-sm-4">
              <Cards />
            </div>
          </div>
        </div>
      </section>
      <div className="card_container">
        <h1 className="deep_text text-uppercase">Don't miss this chance...!</h1>
        <h3 className="text_below">Buy Below The Normal Price</h3>
        <button className="btn btn-light mt-4 btn_text">Open Window</button>
      </div>
      <div className="container">
        <LargeText coloredText="Frequently" text="Purchased" />
        <div className="display_grid">
          <ItemSalesCard />
          <ItemSalesCard />
          <ItemSalesCard />
          <ItemSalesCard />
          <ItemSalesCard />
          <ItemSalesCard />
          <ItemSalesCard />
          <ItemSalesCard />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
