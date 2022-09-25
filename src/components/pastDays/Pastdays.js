import React, { useEffect, useState } from "react";
import "./Pastdays.css";
import Pressure from "../pressure/Pressure";
import moment from 'moment';

const Pastdays = ({ daily, hourly }) => {
 
  const weatherIcon = {
    Rain: "https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg",
    Clear: "https://weatherapp-swanand.netlify.app/img/sunny.ef428e2d.svg",
    Clouds: "https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg"
  };

  const [selectedDay, setSelectedDay] = useState({});
  

  useEffect(() => {
      setSelectedDay(daily[0]);
  }, [daily]);

  return (
    <>
      <div className="days-container">
        {daily?.map((day) => (
          <div
            key={JSON.stringify(day)}
            className="days-box"
            onClick={()=>setSelectedDay(day)}
          >
            <p>
              <b>{moment.unix(day.sunrise).format('ddd')}</b>
            </p>
            <h5>
              <span>{Math.round(day.temp?.max)}&#176;</span>, <span>{Math.round(day.temp?.min)}&#176;</span>
            </h5>
            <img
              src={weatherIcon[day.weather[0]?.main]}
              width="40px"
              alt={day.weather[0]?.main}
            />
            <h5>{day.weather[0]?.main}</h5>
          </div>
        ))}
      </div>
      <Pressure data={selectedDay} hourly={hourly} />
    </>
  );
};

export default Pastdays;
