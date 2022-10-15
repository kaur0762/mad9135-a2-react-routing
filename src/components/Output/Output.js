// import React, { useEffect, useState } from "react";
import React, {useEffect, useState} from "react";
import Weather from "../Weather/Weather";
// import { getGeolocation } from "../../map.service";
import './output.css';

function Output(search){
  const [location, setLocation] = useState([]);
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((pos)=>{
      const crd = pos.coords;
      setLocation(crd);
    })
  },[]);
  
  // getting weather for req location

  if(location.length === 0)
  {
    console.log("empty");
    return(
      <h1>LOADING....</h1>
    )
  }else{
    console.log(location);
    return(
      <div className="weather">
        <Weather location={location} className="wCard"/>
      </div>
    )
  }
}

export default Output;