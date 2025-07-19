import React from 'react'
import { useState } from 'react';
import './App.css'
import Button from './Button';
export default function SearchBox() {
  const ApiUrl = "https://api.openweathermap.org/data/2.5/weather";
  const ApiKey = "6482edc91a262661f159b4af280baf47";
  const [city, setCity] = useState("");
  
  const getWeatherApi = async () => {
      const response = await fetch(`${ApiUrl}?q=${city}&appid=${ApiKey}`);
      const jsonRes = await response.json();
      console.log(jsonRes);
     
    let result={
       temperature:jsonRes.main.temp,
       tempmin:jsonRes.main.temp_min,
       tempmax:jsonRes.main.temp_max,
       humidity:jsonRes.main.humidity,
       feelslike:jsonRes.main.feels_like,
       weather:jsonRes.weather[0]
    }
    console.log(result)
  };
    let handelSumbit=(e)=>{
      e.preventDefault();
      console.log(city)
      setCity("")
      getWeatherApi();
    }
    return (
      <form onSubmit={handelSumbit}>
      <div className="container">
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
           <br />
           <Button/>
         </div>
       </div>
      </form>
    );
}