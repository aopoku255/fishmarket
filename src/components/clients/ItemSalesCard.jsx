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
    <Card className="rounded shadow-lg">
      <img alt="Sample" src={fish} />
      <CardBody>
        <h6 className="text-center">Tilapia</h6>

        <CardText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis,
          eaque?
        </CardText>
        <div className="d-flex">
          <BsStarFill size={10} color="F1C644" />
          <BsStarFill size={10} color="F1C644" />
          <BsStarFill size={10} color="F1C644" />
          <BsStarFill size={10} color="F1C644" />
          <BsStarFill size={10} color="F1C644" />
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="">GH₵ 25.00</div>
          <div className=" btn btn-outline-dark rounded-pill px-3">
            Add to cart
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ItemSalesCard;
