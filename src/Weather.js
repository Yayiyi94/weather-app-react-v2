import React from "react";
import { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("City");
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setWeather({
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon,
      iconUrl: response.data.condition.icon_url,
    });
  }

  function HandleSubmit(event) {
    event.preventDefault();
    let apiKey = "df24oeedc433a37t0bf85c483b145ecb";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;

    axios
      .get(apiUrl)
      .then(displayWeather)
      .catch((error) => {
        console.error("Error fetching current weather", error);
        alert("City not found, please type it again.");
      });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={HandleSubmit} className="searchEngine">
      <input
        type="search"
        placeholder="Enter a city..."
        required
        className="search-form-input"
        onChange={updateCity}
      />
      <input type="submit" value="Search" className="search-button" />
    </form>
  );

  return (
    <div className="Weather">
      {form}
      <div className="weather-overview">
        <div>
          <h1 className="CityOverview" id="city">
            {city}
          </h1>
          <p className="city-details">
            <span id="current-date">Tuesday 12:15,</span>
            <span id="weather-description"> {weather.description}</span>
            <br />
            Humidity:
            <span className="weather-details" id="humidity">
              {" "}
              {weather.humidity}%
            </span>{" "}
            Wind:
            <span className="weather-details" id="wind-speed">
              {" "}
              {weather.wind} km/h
            </span>
          </p>
        </div>
        <div className="city-temperature">
          <div id="weather-icon">
            <img
              src={weather.iconUrl}
              alt={weather.icon}
              className="temperature-icon"
            />
          </div>
          <div className="temperature-element" id="temperature-element">
            {weather.temperature}
          </div>
          <div className="temperature-degree">°C</div>
        </div>
      </div>
      <div className="weather-forecast-overview" id="forecast-overview"></div>
    </div>
  );
}
