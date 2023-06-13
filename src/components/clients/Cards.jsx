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
import { BsArrowRightCircle } from "react-icons/bs";

const Cards = () => {
  return (
    <Card className="border-0 shadow">
      <img alt="Sample" src={fish} />
      <CardBody>
        <CardTitle tag="h5">Red Fish</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Lorem, ipsum dolor.
        </CardSubtitle>
        <CardText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis,
          eaque?
        </CardText>
        <button className="btn btn-outline-success w-100 rounded-0 d-flex justify-content-center align-items-center">
          <span className="view_more mx-2">View More</span>
          <BsArrowRightCircle />
        </button>
      </CardBody>
    </Card>
  );
};

export default Cards;
