import React from 'react'
import { useState } from 'react';
import './App.css'
import Button from './Button';
export default function SearchBox() {
    const [city, setCity] = useState("");
    let handelSumbit=(e)=>{
      e.preventDefault();
      console.log(city)
      setCity("")
    }
    return (
      <form onSubmit={handelSumbit}>
      <div className="wrapper">
      <h3>Search For Weather</h3>
        <div className={`custom-textfield ${city ? "filled" : ""}`}>
          <input
            type="text"
            id="email"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
           <label htmlFor="email">city</label>
           <br />
           <Button/>
         </div>
       </div>
      </form>
    );
}