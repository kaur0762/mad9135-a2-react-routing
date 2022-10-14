import React from "react";
import {Link} from 'react-router-dom';
import './navBar.css'

function NavBar(){
  return(
    <div className="links">
    <Link className="btn" to="/home">Home</Link>
    <Link className="btn" to="/hourly">Hourly</Link>
    <Link className="btn" to="/weekly">Weekly</Link>
    </div>
  )
}

export default NavBar;