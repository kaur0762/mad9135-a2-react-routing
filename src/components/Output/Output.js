import React, { useEffect, useState } from "react";
import Weather from "../Weather/Weather";
import { getGeolocation } from "../../map.service";
import './output.css';

function Output(search){
  const [loc, setLoc] = useState([]);

  // current location points

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

  // searched location points
  useEffect((values)=>{
    getGeolocation(values)
    .then((res) => res)
    .then((data) => setLoc(data))
    .catch(err => console.log(err))
  }, [search.search])
  console.log(loc);

  // getting weather for req location

  return(
    <div className="weather">
    <Weather loc={loc} className="wCard"/>
    </div>
  )
}

export default Output;