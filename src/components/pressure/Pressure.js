import React from 'react'
import "./Pressure.css"

const Pressure = ({ data }) => {
  return (
    <div className='pre-hum'>
      <div className='card'>
           <h3>Pressure</h3>
           <h4>{data?.pressure}</h4>
      </div>
      <div className='card'>
            <h4>Humidity</h4>
            <h4>{data?.humidity}</h4>
      </div>
    </div>
  )
}

export default Pressure
