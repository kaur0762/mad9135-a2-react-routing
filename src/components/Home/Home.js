import React, { useEffect, useState } from "react";

function Home({weather}){
  //helping functions
  function time(value){
    let actTime = new Date(value * 1000).toISOString().slice(11, 16);
    return actTime;
  }
  console.log(weather);


  // display
  if(weather.length === 0){
    console.log("loading weather");
    return(
      <h1>LOADING.......</h1>
    )
  }else {
    console.log(weather.current.dt);
  return(
    <div className="card">
      <div className="temp">
        <h2>{weather.current.temp}&deg; C</h2>
      </div>
        <div>
          <h3>Real Feel:</h3> 
          <p> {weather.current.feels_like}&deg; C</p>
        </div>
        <div>
          <h3>Sunrise:</h3> 
          <p> {time(weather.current.sunrise)} hours</p>
        </div>
        <div>
          <h3>Sunset:</h3>
          <p> {time(weather.current.sunset)} hours</p>
        </div>
    </div>
    )
  }
}

export default Home;