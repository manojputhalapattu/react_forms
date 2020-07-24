import React, { useState } from "react";


function App() {
  const[changedevents,setchangedevent]=useState("hello")
  function changedevent(event){
setchangedevent(event.target.value)
  }
  
  return (
    <div className="container">
      <h1>{changedevents} </h1>
      <input onChange={changedevent} type="text" placeholder="What's your name?" />
      <button>Submit</button>
    </div>
  );
}

export default App;
