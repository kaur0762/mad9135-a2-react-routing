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

function Weather(loc){
  const [weather, setWeather] = useState([]);

  useEffect((values)=>{
    getForecast(values)
    .then((res) => res)
    .then((data) => setWeather(data))
    .catch(err => console.log(err))
  }, [loc])
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
  )
}

export default Weather;