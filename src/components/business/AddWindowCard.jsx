import React from "react";
import { DiDatabase } from "react-icons/di";

const AddWindowCard = (props) => {
  return (
    <div
      className="add_window card border-0 rounded shadow-lg"
      onClick={props.onClick}
    >
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
        <p className="mb-0 fs-3">+</p>
        <p className="mt-0">Add new pond</p>
      </div>
    </div>
  );
};

export default AddWindowCard;
