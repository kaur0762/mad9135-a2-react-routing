import React from "react";
import {Link} from 'react-router-dom';

function NavBar(){
  return(
    <>
    <Link to="/">Home</Link>
    <Link to="/hourly">Hourly</Link>
    <Link to="/weekly">Weekly</Link>
    </>
  )
}

export default NavBar;