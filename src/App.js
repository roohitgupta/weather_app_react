import React, { useEffect, useState } from 'react'
import Sunrise from "./components/Sunrise";
import Searchbox from "./components/searchbox/Searchbox";
import Pressure from "./components/Pressure";
import Graph from "./components/Graph";
import Pasdays from "./components/pastDays/Pastdays";
import "./App.css"

//api key ----   2510dcb54be9c1632e1872eedae0921c
// baseURL --- "https://api.openweathermap.org/data/3.0"

// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

// https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=94.04&exclude=minutely,hourly&appid=AP2510dcb54be9c1632e1872eedae0921c



const App = () => {

  // const[ city, setCity] = useState(null);
  // const[ search, setSearch] = useState("");

  // async function fetchReq(){
  //   try {
  //     const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4ebb9418ca605fa1931880e565ec065c`);
  //     const data = await res.json();
  //     console.log(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // useEffect(()=> {
  //   fetchReq();

  // }, [])

  return (
    
    <div className='app'>
      <div className='main-container'>
       <Searchbox />
       <Pasdays />
      </div>
    </div>



)
}


export default App;
