import React from "react";
import "./Pastdays.css";

const Pastdays = ({ daily }) => {
  //   console.log(props.daily[0]);

  // {
  //       ("10D" ? "https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg" : "https://weatherapp-swanand.netlify.app/img/sunny.ef428e2d.svg")
  // }

  const weatherIcon = {
      Rain: "https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg",
      Clear: "https://weatherapp-swanand.netlify.app/img/sunny.ef428e2d.svg",
  };

  return (
    <div className="days-container">
     
        {daily?.map((day) => (
          <div key={JSON.stringify(day)} className="days-box">
            <p>
              <b>Sun</b>
            </p>
            <h5>
              <span>{day.temp?.max}</span>,<span>{day.temp?.min}</span>
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
  );
};

export default Pastdays;
