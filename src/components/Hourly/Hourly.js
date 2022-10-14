import React from "react";
import { createWeatherIcon } from "../../weather.service";
import './hourly.css';

function Hourly(weather){
  function date(value){
    let actTime = new Date(value * 1000).toISOString().slice(0, 10);
    return actTime;
  }
  function time(value){
    let actTime = new Date(value * 1000).toISOString().slice(11, 16);
    return actTime;
  }

  function img(code){
    createWeatherIcon(code)
  }

  return(
    <ul>
      <li className="hWcard">
        <h2>{date(weather.weather.hourly[0].dt)}</h2>
        <h3>{time(weather.weather.hourly[0].dt)}</h3>
        <p>Temp: {weather.weather.hourly[0].temp}&deg; C</p>
        <p>Feels Like: {weather.weather.hourly[0].feels_like}&deg; C</p>
        <p>{weather.weather.hourly[0].weather[0].description}</p>
        <img src="img(weather.weather.hourly[0].weather[0].icon)" alt="weathericon"/>
      </li>
      <li className="hWcard">
        <h2>{date(weather.weather.hourly[1].dt)}</h2>
        <h3>{time(weather.weather.hourly[1].dt)}</h3>
        <p>Temp: {weather.weather.hourly[1].temp}&deg; C</p>
        <p>Feels Like: {weather.weather.hourly[1].feels_like}&deg; C</p>
        <p>{weather.weather.hourly[1].weather[0].description}</p>
        <img src="img(weather.weather.hourly[1].weather[0].icon)" alt="weathericon"/>
      </li>
      <li className="hWcard">
        <h2>{date(weather.weather.hourly[2].dt)}</h2>
        <h3>{time(weather.weather.hourly[2].dt)}</h3>
        <p>Temp: {weather.weather.hourly[2].temp}&deg; C</p>
        <p>Feels Like: {weather.weather.hourly[2].feels_like}&deg; C</p>
        <p>{weather.weather.hourly[2].weather[0].description}</p>
        <img src="img(weather.weather.hourly[2].weather[0].icon)" alt="weathericon"/>
      </li>
      <li className="hWcard">
        <h2>{date(weather.weather.hourly[3].dt)}</h2>
        <h3>{time(weather.weather.hourly[3].dt)}</h3>
        <p>Temp: {weather.weather.hourly[3].temp}&deg; C</p>
        <p>Feels Like: {weather.weather.hourly[3].feels_like}&deg; C</p>
        <p>{weather.weather.hourly[3].weather[0].description}</p>
        <img src="img(weather.weather.hourly[3].weather[0].icon)" alt="weathericon"/>
      </li>
      <li className="hWcard">
        <h2>{date(weather.weather.hourly[4].dt)}</h2>
        <h3>{time(weather.weather.hourly[4].dt)}</h3>
        <p>Temp: {weather.weather.hourly[4].temp}&deg; C</p>
        <p>Feels Like: {weather.weather.hourly[4].feels_like}&deg; C</p>
        <p>{weather.weather.hourly[4].weather[0].description}</p>
        <img src="img(weather.weather.hourly[4].weather[0].icon)" alt="weathericon"/>
      </li>
      <li className="hWcard">
        <h2>{date(weather.weather.hourly[5].dt)}</h2>
        <h3>{time(weather.weather.hourly[5].dt)}</h3>
        <p>Temp: {weather.weather.hourly[5].temp}&deg; C</p>
        <p>Feels Like: {weather.weather.hourly[5].feels_like}&deg; C</p>
        <p>{weather.weather.hourly[5].weather[0].description}</p>
        <img src="{img(weather.weather.hourly[5].weather[0].icon)}"  alt="weathericon"/>
      </li>
    </ul>
  )
}

export default Hourly;