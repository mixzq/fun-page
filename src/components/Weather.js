import React, { useState } from "react";

function Weather({ check, setCity, data }) {
  // K  to c functionbeijing
  const kToC = (k) => {
    let newTemp = Math.floor(k - 273.15);
    return newTemp;
  };
  //input
  const inputHandler = (e) => {
    setCity(e.target.value);
  };
  return (
    <div className="weather">
      <div className="button">
        <input onChange={inputHandler} type="text" />
        <button onClick={check}>Check</button>
      </div>
      <div className="weatherInfo">
        <h3>City: {data.name}</h3>
        <h3>Weather: {kToC(data.main.temp)}°C</h3>
        <h3>Humidity: {data.main.humidity}%</h3>
        <h3>Des: {data.weather[0].description}</h3>
      </div>
    </div>
  );
}

export default Weather;
