import React from "react";
import { useState } from "react";
const FormComponent = ({addColor}) => {
  const [color, setColor] = useState("");
  const handleSubmit = (e)=>{
e.preventDefault()
 addColor(color)
  }
  return (
    <section className=" container">
      <h4>Color Generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input type="color" value={color} onChange={(e)=>setColor(e.target.value)}></input>
        
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder = {color}
        ></input>
        <button className="btn" type="submit" style={{background: color}}>
        Submit
        </button>
      </form>
    </section>
  );
};

export default FormComponent;
