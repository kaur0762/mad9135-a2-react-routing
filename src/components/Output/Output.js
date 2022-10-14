import React, { useEffect, useState } from "react";
import { getForecast } from "../../weather.service";

function Output(search){
  const [weather, setWeather] = useState([]);

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    const crd = pos.coords;
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);

  useEffect((values)=>{
    getForecast(values)
    .then((res) => res)
    .then((data) => setWeather(data))
    .catch(err => console.log(err))
  }, [])
  console.log(weather);

  function time(value){
    let actTime = new Date(value * 1000).toISOString().slice(11, 16);
    return actTime;
  }

  return(
    <div>
      <h2>{weather.current.temp}&deg; C</h2>
        <div>
          <h3>Real Feel:</h3> 
          <p> {weather.current.feels_like}&deg; C</p>
        </div>
        <div>
          <h3>Sunrise:</h3> 
          <p> {time(weather.current.sunrise)} am</p>
        </div>
        <div>
          <h3>Sunset:</h3>
          {/* <p> {time(weather.current.sunrset)} pm</p> */}
        </div>
    </div>
  )
}

export default Output;