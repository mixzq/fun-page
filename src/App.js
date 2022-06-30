import React, { useState, useEffect } from "react";
import "./styles/style.css";
import Joke from "./components/Joke";
import Weather from "./components/Weather";

function App() {
  //weather Api part
  useEffect(() => {
    check();
  }, []);

  const myKey = "394fba90e8eb5b111c47b978bbef1fb6";
  // const myKey = "36de3de8f26ee040fe86dbdc7dc42d34";
  const [city, setCity] = useState("oslo");
  const [joke, setJoke] = useState("");
  //initial data (in case data fecting too slow)
  const [weatherData, setWeather] = useState({
    weather: [
      {
        id: 802,
        main: "Clouds",
        description: "scattered clouds",
        icon: "03n",
      },
    ],

    main: {
      temp: 293.19,
      feels_like: 291.28,
      temp_min: 292.55,
      temp_max: 296.34,
      pressure: 1015,
      humidity: 1,
      sea_level: 1015,
      grnd_level: 1012,
    },
  });
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`;
  let intialURL = `https://api.openweathermap.org/data/2.5/weather?q=oslo&appid=${myKey}`;

  //check weather
  const check = async () => {
    let d = await fetch(url);
    let dj = await d.json();
    setWeather(dj);
  };

  //joke API part

  const jokeUrl =
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw&type=single";
  const getJoke = async () => {
    let d = await fetch(jokeUrl);
    let dj = await d.json();
    console.log(dj);
    setJoke(dj);
  };

  return (
    <div className="app">
      <div className="weatherPart">
        <Weather setCity={setCity} check={check} data={weatherData} />
      </div>
      <div>
        <Joke get={getJoke} joke={joke} />
      </div>
    </div>
  );
}

export default App;
