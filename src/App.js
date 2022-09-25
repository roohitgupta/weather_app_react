import React, { useEffect, useState } from 'react'
import Sunrise from "./components/sunrise/Sunrise";
import Searchbox from "./components/searchbox/Searchbox";
import Pressure from "./components/pressure/Pressure";
import Graph from "./components/graph/Graph";
import Pasdays from "./components/pastDays/Pastdays";
import "./App.css"

//api key ----   2510dcb54be9c1632e1872eedae0921c
// baseURL --- "https://api.openweathermap.org/data/3.0"

// key = 4ebb9418ca605fa1931880e565ec065c

//juened key = e4c70ce6a6821649a416cb9521d5f

// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

// https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=94.04&exclude=minutely&units=metric&appid=2510dcb54be9c1632e1872eedae0921c


//http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2510dcb54be9c1632e1872eedae0921c


const App = () => {

  const[daily, setDaily] = useState([]);
  const[search, setSearch] = useState("bhopal");

  async function fetchReq(){
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=28.6600&lon=77.2300&exclude=minutely&units=metric&appid=4ebb9418ca605fa1931880e565ec065c`);
      const data = await res.json();
      console.log(data)
      setDaily(data.daily)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=> {
    fetchReq();
    fetchReq2();

  }, [])


  async function fetchReq2(){
    try {
      const res = await fetch(`api.openweathermap.org/data/2.5/forecast/daily?q={serach}&cnt=7&appid=e4c70ce6a6821649a416cb9521d5f`);
      const data = await res.json();
      console.log(data)
      setDaily(data.daily)
    } catch (error) {
      console.log(error)
    }
  }



  return (
    
    <div className='app'>
      <div className='main-container'>
       <Searchbox />
       <Pasdays daily={daily} />
       {/* <Graph /> */}
       <Sunrise />
      </div>
    </div>



)
}


export default App;
