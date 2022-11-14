import React from "react";
import img1 from "../../assets/images/fish4.jpg";
import { Progress } from "reactstrap";

const WindowCard = () => {
  return (
    <div className="window_card">
      <img
        src={img1}
        alt=""
        className="img_card img-fluid rounded mx-auto d-block"
      />
      <h5 className="window_card_title text-center mt-3">Item Name</h5>
      <Progress
        className="rounded-pill progress_bar"
        value="75"
        barClassName="rounded-pill"
      >
        75%
      </Progress>
      <div className="d-flex justify-content-between align-items-center mx-2 mt-2">
        <p>00:00:00:00</p>
        <p>20days</p>
      </div>
      <div className="d-flex justify-content-between align-items-center mx-2 mt-2">
        <div>GH₵ 59.99</div>
        <div className="btn btn-primary">Pre-Order</div>
      </div>
    </div>
  );
};

export default WindowCard;
