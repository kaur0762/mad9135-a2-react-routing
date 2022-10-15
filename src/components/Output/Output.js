import React, {useEffect, useState} from "react";
import Weather from "../Weather/Weather";
import { getGeolocation } from "../../map.service";
import './output.css';

function Output({search}){
  const [location, setLocation] = useState([]);
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((pos)=>{
      const crd = pos.coords;
      setLocation(crd);
    })
  },[]);

  console.log(search);

  const [searchLocation, setSearchLocation] = useState([]);
  useEffect(() => {
    getGeolocation(search)
    .then((res) => res)
    .then((data) => setSearchLocation(data))
    .catch(err => console.log(err))
  }, [search])
  
  // getting weather for req location

  if(searchLocation.length !== 0){
    console.log(searchLocation);
    return(
      <div className="weather">
        <Weather location={searchLocation} className="wCard"/>
      </div>
    )
  }else if(location.length !== 0){
    console.log(location);
    return(
      <div className="weather">
        <Weather location={location} className="wCard"/>
      </div>
    )
  }
  else
  {
    console.log("empty");
    return(
      <h1>LOADING....</h1>
    )
  }
}

export default Output;