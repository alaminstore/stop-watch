import React from "react";

const Laps = (props) => {
  return (
    <div>
      <ul className="list-group list-group-flush">
        {props.Laps.map((lap, index) => {
          return (
            <h5>
              <li key={index} className="list-group-item text-center">
                <span className="text-dark mx-2">Min:</span>
                <span className="text-danger">{lap.min}</span>
                <span className="text-dark mx-2 ml-5">Sec:</span>
                <span className="text-danger">{lap.sec}</span>
                <span className="text-dark mx-2 ml-5">Mili:</span>
                <span className="text-danger">{lap.mili}</span>
              </li>
            </h5>
          );
        })}
      </ul>
    </div>
  );
};

export default Laps;
