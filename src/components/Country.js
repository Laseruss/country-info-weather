// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const api_key = process.env.REACT_APP_API_KEY;
// variable api_key has now the value set in startup

function Country({ country }) {
  const [newWeather, setNewWeather] = useState({
    main: { temp: 0 },
    wind: { speed: 0 },
  });
  const [icon, setIcon] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    try {
      async function getWeather() {
        console.log(country.capital);
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&appid=${api_key}`
        );
        const data = await res.data;
        setNewWeather(data);
        setIcon(data.weather[0].id);
        setDesc(data.weather[0].description);
        console.log("fetched weather data:", data);
      }
      getWeather();
    } catch (error) {
      console.error(error);
    }
  }, [country]);

  let qStr = "";
  switch (String(icon)[0]) {
    case "2":
      qStr = "11d";
      break;
    case "3":
      qStr = "09d";
      break;
    case "5":
      qStr = "10d";
      break;
    case "6":
      qStr = "13d";
      break;
    case "7":
      qStr = "50d";
      break;
    case "8":
      qStr = "01d";
      break;
    case "9":
      qStr = "02d";
      break;
    default:
      console.log("it didnt work..");
  }

  const src = `http://openweathermap.org/img/wn/${qStr}@2x.png`;

  console.log(src);

  return (
    <>
      <h1>{country.name}</h1>
      <p>Capital city: {country.capital}</p>
      <p>Area: {country.area}km2</p>
      <h4>Languages:</h4>
      <ul>
        {country.languages.map((l, i) => (
          <li key={i + 1}>{l.name}</li>
        ))}
      </ul>
      <img src={country.flag} alt={`Flag of ${country.name}`} width={"200"} />
      <h3>Weather in {country.capital}</h3>
      <p>Temperature: {newWeather.main.temp}</p>
      <p>Wind: {newWeather.wind.speed.toFixed(2)} m/s</p>
      <img src={src} alt={"Weather conditions"} />
      <p>{desc}</p>
    </>
  );
}

export default Country;
