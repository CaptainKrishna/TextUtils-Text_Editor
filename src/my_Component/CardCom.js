import React from "react";
import { useState } from "react";

export default function CardCom() {
  const [mode, setNew] = useState({
    color: "white",
    backgroundColor: "#0f172a"
  });
  const handleChange=()=>{
    if(mode.color==='white'){
      setNew({
        color: "#0f172a",
        backgroundColor: "#22c55e"
      })
    }
    else{
      setNew({
        color: "white",
        backgroundColor: "#0f172a"
      })
    }
  }
  return (
    <div >
      <div className="h-12 w-full " style={mode}>
      Hello firends
      </div>
      <button className="btn" onClick={handleChange}>change color</button>
    </div>
  );
}
