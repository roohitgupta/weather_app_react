import React, { useState, useEffect } from "react";
import "./Searchbox.css";
import Pastdays from "../pastDays/Pastdays";
import { MdLocationOn } from "react-icons/md";
import { BiSearchAlt2 } from "react-icons/bi";
// import useGeoLocation from "../useGeoLocation/useGeoLocation";

const Searchbox = () => {
  const [daily, setDaily] = useState([]);
  const [hourly, setHourly] = useState([]);
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);


// asking for user location 
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: 0, lng: 0 },
  });

  const onSuccess = (location) => {
    // console.log("location-location", location);
    setLocation({
      loaded: true,
      coordinates: {
        lat: location?.coords?.latitude,
        lng: location?.coords?.longitude,
      },
    });
  };

  const onError = (error) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: 0,
        lng: 0,
      }.error,
    });
  };


  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      });
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);


  // fetching with latitue and langitute data
  async function fetchReq(lat, lon) {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=4ebb9418ca605fa1931880e565ec065c`
      );
      const data = await res.json();
      console.log(data);
      setDaily(data.daily);
      setHourly(data.hourly);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchReq(lat, lon);
  }, [lat, lon]);

  useEffect(() => {
    // console.log("location", location);
    setLat(location?.coordinates?.lat);
    setLon(location?.coordinates?.lng);
  }, [location]);


  // fetching with city name and passing the latitue and langitute to above fetching function
  const cityDataFetch = async (cityName) => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=2510dcb54be9c1632e1872eedae0921c`
    );
    const data = await response.json(); // Here you have the data that you need
    if (data) {
      // console.log(data.coord)
      setLat(data.coord.lat);
      setLon(data.coord.lon);
    }
    // console.log(JSON.stringify(data, null, 2));
  };


  // debouncing fucntion for search box with 1.5 seconds delay
  let timer;
  const handleSearch = (value) => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        cityDataFetch(value)
      }, 1500);
}

  return (
    <>
      <div className="container">
        <div className="location-icon">
          <MdLocationOn />
        </div>
        <input
          type="text"
          className="search-tag"
          // onChange={(event) => cityDataFetch(event.target.value)}
          onChange={(e)=>handleSearch(e.target.value)}
          placeholder="Enter City Here"
        />
        <div className="search-icon">
          <BiSearchAlt2 />
        </div>
      </div>
      <Pastdays daily={daily} hourly={hourly} />
    </>
  );
};

export default Searchbox;
