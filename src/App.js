import React from 'react'
import Searchbox from "./components/searchbox/Searchbox";
import "./App.css"

//api key ----   2510dcb54be9c1632e1872eedae0921c
// baseURL --- "https://api.openweathermap.org/data/3.0"

// key = 4ebb9418ca605fa1931880e565ec065c

//juened key = e4c70ce6a6821649a416cb9521d5f

// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

// https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=94.04&exclude=minutely&units=metric&appid=2510dcb54be9c1632e1872eedae0921c


//http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2510dcb54be9c1632e1872eedae0921c


const App = () => {

  return (
    
    <div className='app'>
      <div className='main-container'>
       <Searchbox  />
      </div>
    
    </div>



)
}


export default App;
