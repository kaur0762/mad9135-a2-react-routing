import React, { useState } from "react";
import Output from "../Output/Output";

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
    <Output search={search}/>
    </>
  )
}

export default Main;