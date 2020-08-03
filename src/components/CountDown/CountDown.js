import React from "react";
import Digit from "./Digit/Digit";

const countDown = (props) => {
  return (
    <div className="d-flex">
      <Digit color="#3C79B6" value={props.time.min}/>
      <Digit color="#FB6D6C" value={props.time.sec} />
      <Digit color="#B7201E" value={props.time.mili} />
    </div>
  );
};

export default countDown;
