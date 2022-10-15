import React from "react";
// import { createWeatherIcon } from "../../weather.service";
import './hourly.css';

function Hourly({weather}){
  function date(value){
    let actTime = new Date(value * 1000).toISOString().slice(0, 10);
    return actTime;
  }
  function time(value){
    let actTime = new Date(value * 1000).toISOString().slice(11, 16);
    return actTime;
  }

  // function img(code){
  //   createWeatherIcon(code);
  // }
  if(weather.length === 0){
    return(
      <h1>LOADING.......</h1>
    )
  }else {
    console.log(weather.hourly[0].weather[0].description)
    return(
      <ul>
        {weather.hourly.map(data =>{
          return(
            <li className="hWcard">
              <h2>{date(data.dt)}</h2>
              <h3>{time(data.dt)}</h3>
              <p>{data.temp}&deg; C</p>
              <p>{data.feels_like}&deg; C</p>
              <p>{data.weather[0].description}</p>
            </li>
          )
        })}
      </ul>
    )}

  
}

export default Hourly;