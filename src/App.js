import React, { useState } from "react";
import "./style.css";

function App(){
  let [isLit, setLit] = useState(true);
  let [isTemp, setTemp] = useState(23)

  function on_update(){
    console.log("On-Button clicked");
    setLit(true)
  }

  function off_update(){
    console.log("Off-Button clicked");
    setLit(false);
  }

  function plus_temp(){
    console.log("Increase-Button clicked")
    setTemp(++isTemp)
  }

  function minus_temp(){
    console.log("Decrease-Button clicked")
    setTemp(--isTemp)
  }


  return(
    <div className = {`room ${isLit? "lit" : "dark"}`}>
      <span id = "lights">
      The room is {isLit? "lit":"dark"}.

      <div id = "buttons">

      <button id = "on_button" onClick = {on_update}>
      ON 
      </button>

      <span id = "off_button">

      <button onClick = {off_update}>
      OFF
      </button>
      </span>
      </div>
      </span>

      <div className= "temp">
        Today's temperature is {isTemp} degrees Celsius.
      </div>
      <div id = "buttons">
      <button onClick = {plus_temp}>
        Increase
      </button>
      <span id = "minus">
      <button onClick = {minus_temp}>
        Decrease
      </button>
      </span>
      </div>

    </div>
      
    
  )




}

export default App;
