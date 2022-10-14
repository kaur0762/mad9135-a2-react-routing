import React from "react";
import { createWeatherIcon } from "../../weather.service";
import './weekly.css';

function Weekly(weather){
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
  // console.log(weather.weather.daily[0].dt)
  return(
    <ul>
      <li className="hWcard">
        <h2>{date(weather.weather.daily[0].dt)}</h2>
        <h3>{time(weather.weather.daily[0].dt)}</h3>
        <p>Temp: {weather.weather.daily[0].temp.day}&deg; C</p>
        <p>Feels Like: {weather.weather.daily[0].feels_like.day}&deg; C</p>
        <p>{weather.weather.daily[0].weather[0].description}</p>
        <img src="img(weather.weather.daily[0].weather[0].icon)" alt="weathericon"/>
      </li>
      <li className="hWcard">
        <h2>{date(weather.weather.daily[1].dt)}</h2>
        <h3>{time(weather.weather.daily[1].dt)}</h3>
        <p>Temp: {weather.weather.daily[1].temp.day}&deg; C</p>
        <p>Feels Like: {weather.weather.daily[1].feels_like.day}&deg; C</p>
        <p>{weather.weather.daily[1].weather[0].description}</p>
        <img src="img(weather.weather.daily[1].weather[0].icon)" alt="weathericon"/>
      </li>
      <li className="hWcard">
        <h2>{date(weather.weather.daily[2].dt)}</h2>
        <h3>{time(weather.weather.daily[2].dt)}</h3>
        <p>Temp: {weather.weather.daily[2].temp.day}&deg; C</p>
        <p>Feels Like: {weather.weather.daily[2].feels_like.day}&deg; C</p>
        <p>{weather.weather.daily[2].weather[0].description}</p>
        <img src="img(weather.weather.daily[2].weather[0].icon)" alt="weathericon"/>
      </li>
      <li className="hWcard">
        <h2>{date(weather.weather.daily[3].dt)}</h2>
        <h3>{time(weather.weather.daily[3].dt)}</h3>
        <p>Temp: {weather.weather.daily[3].temp.day}&deg; C</p>
        <p>Feels Like: {weather.weather.daily[3].feels_like.day}&deg; C</p>
        <p>{weather.weather.daily[3].weather[0].description}</p>
        <img src="img(weather.weather.daily[3].weather[0].icon)" alt="weathericon"/>
      </li>
      <li className="hWcard">
        <h2>{date(weather.weather.daily[4].dt)}</h2>
        <h3>{time(weather.weather.daily[4].dt)}</h3>
        <p>Temp: {weather.weather.daily[4].temp.day}&deg; C</p>
        <p>Feels Like: {weather.weather.daily[4].feels_like.day}&deg; C</p>
        <p>{weather.weather.daily[4].weather[0].description}</p>
        <img src="img(weather.weather.daily[4].weather[0].icon)" alt="weathericon"/>
      </li>
      <li className="hWcard">
        <h2>{date(weather.weather.daily[5].dt)}</h2>
        <h3>{time(weather.weather.daily[5].dt)}</h3>
        <p>Temp: {weather.weather.daily[5].temp.day}&deg; C</p>
        <p>Feels Like: {weather.weather.daily[5].feels_like.day}&deg; C</p>
        <p>{weather.weather.daily[5].weather[0].description}</p>
        <img src="{img(weather.weather.daily[5].weather[0].icon)}"  alt="weathericon"/>
      </li>
    </ul>
  )
}

export default Weekly;