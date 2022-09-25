import React, { useState, useEffect } from "react";
import "./Searchbox.css";
import Pastdays from "../pastDays/Pastdays";
import { MdLocationOn } from "react-icons/md";
import { BiSearchAlt2 } from "react-icons/bi";

const Searchbox = () => {
  const [search, setSearch] = useState("");
  const [daily, setDaily] = useState([]);
  const [lat, setLat] = useState(0); 
  const [lon, setLon] = useState(0); 

  console.log("lat:", lat)
  console.log("lon:", lon)


  async function fetchReq(lat, lon){
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=4ebb9418ca605fa1931880e565ec065c`);
      const data = await res.json();
      console.log(data)
      setDaily(data.daily)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=> {
    fetchReq(lat, lon);
  }, [lat])
  
  const cityDataFetch = async (cityName) => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=2510dcb54be9c1632e1872eedae0921c`);
    const data = await response.json(); // Here you have the data that you need
    if (data) {
      console.log(data.coord)
      setLat(data.coord.lat)
      setLon(data.coord.lon)
    }
    // console.log(JSON.stringify(data, null, 2));
  };
 

  return (
    <>
    <div className="container">
      <div className="location-icon">
        <MdLocationOn />
      </div>
      <input
        type="text"
        className="search-tag"
        onChange={(event) => cityDataFetch(event.target.value)}
        placeholder="Enter City Here"
      />
      <div className="search-icon">
        <BiSearchAlt2 />
      </div>
    </div>
      <Pastdays daily={daily} />
    </>
  );
};

export default Searchbox;
