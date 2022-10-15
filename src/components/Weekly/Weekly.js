import React from "react";
// import { createWeatherIcon } from "../../weather.service";
import './weekly.css';

function Weekly({weather}){
  function date(value){
    let actTime = new Date(value * 1000).toISOString().slice(0, 10);
    return actTime;
  }
  function time(value){
    let actTime = new Date(value * 1000).toISOString().slice(11, 16);
    return actTime;
  }

  // function img(code){
  //   createWeatherIcon(code)
  // }
  // console.log(weather.weather.daily[0].dt)
  if(weather.length === 0){
    return(
      <h1>LOADING.......</h1>
    )
  }else {
    console.log(weather.daily[0].weather[0].description)
  return(
    <ul>
    {weather.daily.map(data =>{
      return(
        <li className="hWcard">
          <h2>{date(data.dt)}</h2>
          <h3>{time(data.dt)}</h3>
          <p>{data.temp.day}&deg; C</p>
          <p>{data.feels_like.day}&deg; C</p>
          <p>{data.weather[0].description}</p>
        </li>
      )
    })}
    </ul>
  )}
}

export default Weekly;