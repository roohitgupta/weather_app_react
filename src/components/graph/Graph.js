import React from 'react'
import "./Graph.css"
const Chart = require('chart.js');

const graph = () => {

  var xValues = [12,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
  var yValues = [10,20,30,40,50,60]

  // var myChart = new Chart("myChart", {
  //   type: "line",
  //   data: {
  //     labels: xValues,
  //     datasets: [{
  //       fill: true,
  //       lineTension: 0,
  //       backGroundColor: "rgba(0,0,255,1.0)",

  //     }]
  //   },
  //   options: {
  //     legend: {display: false},
  //     scales: {
  //       yAxes: [{ticks: {min: 0, max: 16}}],
  //     }
  //   }
  // });


  



  return (
    <div className='graph'>
      

      
    </div>
  )
}

export default graph
