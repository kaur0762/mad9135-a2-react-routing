import React, { useState } from "react";
import Home from '../Home/Home';
import Weekly from '../Weekly/Weekly';
import Hourly from '../Hourly/Hourly';
import NavBar from '../NavBar/NavBar';
import NotFound from '../NotFound/NotFound';
// import {Routes, Route, useRoutes } from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import './main.css';

function Main(){
  const [search, setSearch] = useState("");

  function handleSubmit(ev){
    ev.preventDefault();
    setSearch(ev.target[0].value);
  }
  return(
    <>
    <form className="inputForm" onSubmit={handleSubmit}>
        <input type="text"/>
        <button type="submit">Search</button>
      </form>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home search={search}/>}/>
        <Route path="/hourly" element={<Hourly/>}/>
        <Route path="/weekly" element={<Weekly/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes >
    </>
  )
}

export default Main;