import React, { useEffect, useState } from "react";
import Home from "../Home/Home";
import Weekly from '../Weekly/Weekly';
import Hourly from '../Hourly/Hourly';
import NavBar from '../NavBar/NavBar';
import NotFound from '../NotFound/NotFound';
// import {Routes, Route, useRoutes } from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import { getForecast } from "../../weather.service";
import './weather.css';

function Weather({location}){
  const [weather, setWeather] = useState([]);
  console.log(location)

  useEffect(()=>{
    getForecast(location)
    .then((res) => res)
    .then((data) => setWeather(data))
    .catch(err => console.log(err))
  }, [location])

  if(weather.length === 0){
    console.log("pages are loading");
    return(
      <h1>LOADING.......</h1>
    )
  }else {
    console.log(weather);
  return(
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home weather={weather}/>}/>
        <Route path="/hourly" element={<Hourly weather={weather}/>}/>
        <Route path="/weekly" element={<Weekly weather={weather}/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes >
    </>
  )}
}

export default Weather;