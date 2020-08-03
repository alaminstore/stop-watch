import React from "react";
import Digit from "./Digit/Digit";

const countDown = (props) => {
  return (
    <div className="d-flex">
      <Digit color="#3C79B6" value="30" />
      <Digit color="#FB6D6C" value="06" />
      <Digit color="#B7201E" value="03" />
    </div>
  );
};

export default countDown;
