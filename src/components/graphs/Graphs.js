import React, { useEffect } from "react";
import "./graphs.css";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import moment from 'moment';


const Pressure = ({ data, hourly = [] }) => {
  useEffect(() => console.log("hourly", hourly), [hourly]);
  return (
    <div className="outer-container">
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
                tension: 0,
                pointStyle:'line',
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)",
              },
            ],
          }}
        />
      ) : null}

      <div className="pre-hum">
        <div className="card">
          <p>Pressure</p>
          <p>{data?.pressure} hpa</p>
        </div>
        <div className="card">
          <p>Humidity</p>
          <p>{data?.humidity} %</p>
        </div>
      </div>

      <div>
      {data?.sunrise ? (
        <div>
        {console.log(parseInt(moment.unix(data.sunrise).format('h'))-1)}
        {console.log(parseInt(moment.unix(parseInt((data.sunrise+data.sunset)/2)).format('HH'))-1)}
        {console.log(parseInt(moment.unix(data.sunset).format('HH'))-1)}
        </div>
      ):null}
      {data?.sunrise ? (
        <Chart
          type="line"
          data={{
            labels: [moment.unix(data.sunrise).format('hh a'), moment.unix(parseInt((data.sunrise+data.sunset)/2)).format('hh a'), moment.unix(data.sunset).format('hh a')],
            datasets: [
              {
                label: "Temperature",
                data: [
                  hourly[parseInt(moment.unix(data.sunrise).format('h'))-1].temp,
                  hourly[parseInt(moment.unix(parseInt((data.sunrise+data.sunset)/2)).format('HH'))-1].temp,
                  hourly[parseInt(moment.unix(data.sunset).format('HH'))-1].temp
                ],
                fill: true,
                tension: 0,
                pointStyle:'line',
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)",
              },
            ],
          }}
        />
      ) : null}
      </div>
    </div>
  );
};

export default Pressure;
