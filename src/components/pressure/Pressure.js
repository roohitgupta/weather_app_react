import React from "react";
import "./Pressure.css";

const Pressure = ({ data }) => {
  return (
    <div className="outer-container">
      <div className="graph"></div>

      <div className="pre-hum">
        <div className="card">
          <h3>Pressure</h3>
          <h4>{data?.pressure} hpa</h4>
        </div>
        <div className="card">
          <h4>Humidity</h4>
          <h4>{data?.humidity} %</h4>
        </div>
      </div>

      <div className="sunrise"></div>
    </div>
  );
};

export default Pressure;
