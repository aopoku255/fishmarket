import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import fish from "../../assets/images/fish4.jpg";
import { BsArrowRightCircle, BsStarFill } from "react-icons/bs";

const ItemSalesCard = () => {
  return (
    <div class="card border-0 shadow">
      <img src={fish} class="card-img-top" alt="" />
      <div class="card-body">
        <h6 className="card-title lead text-uppercase">Red Fish</h6>
        <p class="card-text mb-0">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <div className="rating mt-0">
          <BsStarFill color="F1C644" className="star" />
          <BsStarFill color="F1C644" className="star" />
          <BsStarFill color="F1C644" className="star" />
          <BsStarFill color="F1C644" className="star" />
          <BsStarFill color="F1C644" className="star" />
        </div>
        <div className="d-flex align-items-end justify-content-between">
          <div className="text-success">GH₵ 25.00</div>
          <div className=" btn btn-outline-success rounded-pill text-nowrap px-3">
            Add to cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemSalesCard;
