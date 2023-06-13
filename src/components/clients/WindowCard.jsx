import React from "react";
import img1 from "../../assets/images/fish4.jpg";
import { Modal, ModalBody, Progress } from "reactstrap";

const WindowCard = () => {
  return (
    <div className="window_card">
      <img
        src={img1}
        alt=""
        className="img_card img-fluid rounded mx-auto d-block"
      />
      <h5 className="window_card_title text-center mt-3 fs-4 fw-semibold">
        Item Name
      </h5>
      <Progress
        className="rounded-pill progress_bar opacity-75"
        value="75"
        barClassName="rounded-pill"
        color="success"
      >
        75%
      </Progress>
      <div className="d-flex justify-content-between align-items-center mx-2 mt-2">
        <p className="text-success fw-bold">00:00:00:00</p>
        <p className="text-success fw-bold">20days</p>
      </div>
      <div className="d-flex justify-content-between align-items-center mx-2 mt-2">
        <div className="text-success fw-bold">GH₵ 59.99</div>
        <div className="btn btn-success opacity-75">Pre-Order</div>
      </div>
    </div>
  );
};

export default WindowCard;
