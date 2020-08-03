import React from "react";
import "./Digit.css";

this.state = {
  title: {
    home: 0,
    cols: 10,
  },
};

const Digit = (props) => {
  return (
    <div
      className="Digit mx-4 text-center"
      style={{ borderColor: props.color }}
    >
      <h1 className="display-3 py-4" style={{ color: props.color }}>
        {props.value}
      </h1>
    </div>
  );
};

export default Digit;
