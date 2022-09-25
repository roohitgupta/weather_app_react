import React, { useEffect } from "react";
import "./Pressure.css";
// import { Chart as ChartJS, defaults } from "chart.js";
// import { CategoryScale } from "chart.js";
// Line.register(CategoryScale);
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

const Pressure = ({ data, hourly = [] }) => {
  useEffect(() => console.log("hourly", hourly), [hourly]);
  return (
    <div className="outer-container">
      {/* <div className="graph"> */}
      {hourly.length ? (
        <Chart
          type="line"
          data={{
            labels: hourly.map((hour, index) => index + 1),
            datasets: [
              {
                label: "Temperature",
                data: hourly.map((hour) => hour.temp),
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)",
              },
            ],
          }}
        />
      ) : null}
      {/* </div> */}

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
