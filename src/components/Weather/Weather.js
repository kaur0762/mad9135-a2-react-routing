import React, { useEffect, useState } from "react";
import { getForecast } from "../../weather.service";
import './weather.css';

function Weather(loc){
  const [weather, setWeather] = useState([]);

  useEffect((values)=>{
    getForecast(values)
    .then((res) => res)
    .then((data) => setWeather(data))
    .catch(err => console.log(err))
  }, [loc])
  console.log(weather);

  function time(value){
    let actTime = new Date(value * 1000).toISOString().slice(11, 16);
    return actTime;
  }

  return(
    <div className="card">
      <div className="temp">
        {/* <h2>{weather.current.temp}&deg; C</h2> */}
      </div>
        <div>
          <h3>Real Feel:</h3> 
          {/* <p> {weather.current.feels_like}&deg; C</p> */}
        </div>
        <div>
          <h3>Sunrise:</h3> 
          {/* <p> {time(weather.current.sunrise)} hours</p> */}
        </div>
        <div>
          <h3>Sunset:</h3>
          {/* <p> {time(weather.current.sunset)} hours</p> */}
        </div>
    </div>
  )
}

export default Weather;