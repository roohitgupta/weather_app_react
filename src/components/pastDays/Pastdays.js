import React, { useEffect, useState } from "react";
import "./Pastdays.css";
import Pressure from "../pressure/Pressure";

const Pastdays = ({ daily }) => {
 
  const weatherIcon = {
    Rain: "https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg",
    Clear: "https://weatherapp-swanand.netlify.app/img/sunny.ef428e2d.svg",
    Clouds: "https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg"
  };

  const [selectedDay, setSelectedDay] = useState({});

  const weekDaysArray = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
  const [weekDay, setWeekDay] = useState("");

  

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
              <b>Sun</b>
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
      <Pressure data={selectedDay} />
    </>
  );
};

export default Pastdays;
