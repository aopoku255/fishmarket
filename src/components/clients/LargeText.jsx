import React from "react";

const LargeText = (props) => {
  return (
    <h1 className="text-center mt-5 text_heading_1">
      <span className="text-success">{props.coloredText}</span> {props.text}
    </h1>
  );
};

export default LargeText;
