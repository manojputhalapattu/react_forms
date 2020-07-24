import React, { useState } from "react";


function App() {
  const[changedevents,setchangedevent]=useState("hello")
  const[clicked,setclicked]=useState("hello")
  function changedevent(event){
setchangedevent(event.target.value)
  }
  function clickedevent(){
setclicked(changedevents)
  }
  
  return (
    <div className="container">
      <h1>{clicked} </h1>
      <input onChange={changedevent} name="names" type="text" placeholder="What's your name?" />
      <button onClick={clickedevent}>Submit</button>
    </div>
  );
}

export default App;
