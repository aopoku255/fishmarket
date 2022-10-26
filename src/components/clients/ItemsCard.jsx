import React from "react";
import { BsPlayCircle, BsAlarm, BsStack } from "react-icons/bs";
import { GiDeliveryDrone } from "react-icons/gi";
import window from "../../assets/images/window.png";
import products from "../../assets/images/biology.png";
import delivery from "../../assets/images/delivery.png";
import loudspeaker from "../../assets/images/loudspeaker.png";
import { Link } from "react-router-dom";

const ItemsCard = () => {
  return (
    <div className="items_card card border-0 shadow-lg d-sm-flex rounded-0">
      <div
        className="d-md-flex justify-content-around align-items-center items_grid"
        style={{ height: "4rem" }}
      >
        <Link to="" className="d-flex align-items-center items_card_box">
          <img src={delivery} alt="" width={30} />
          <span className="mx-1">Home Delivery</span>
          <div className="bar_underline"></div>
        </Link>
        <Link to="" className="d-flex align-items-center items_card_box">
          <img src={window} alt="" width={30} />
          <span className="mx-1">Window</span>
          <div className="bar_underline"></div>
        </Link>
        <Link to="" className="d-flex align-items-center items_card_box">
          <img src={products} alt="" width={30} />
          <span className="mx-1">Products Listing</span>
          <div className="bar_underline"></div>
        </Link>
        <Link to="" className="d-flex align-items-center items_card_box">
          <img src={loudspeaker} alt="" width={30} />
          <span className="mx-1">Promtions</span>
          <div className="bar_underline"></div>
        </Link>
      </div>
    </div>
  );
};

export default ItemsCard;
