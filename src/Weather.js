import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ ready: true });

  function displayWeather(response) {
    let data = {
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon,
      iconUrl: response.data.condition.icon_url,
      coordinates: response.data.coordinates,
    };

    setWeather(data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiKey = "10fa90a2o832483bf734tfe8a27fcdad";
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

  if (weather.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit} className="searchEngine">
          <input
            type="search"
            placeholder="Enter a city..."
            required
            className="search-form-input"
            onChange={updateCity}
          />
          <input type="submit" value="Search" className="search-button" />
        </form>

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
              {weather.iconUrl && (
                <img
                  src={weather.iconUrl}
                  alt={weather.icon}
                  className="temperature-icon"
                />
              )}
            </div>
            <div className="temperature-element" id="temperature-element">
              {weather.temperature}
            </div>
            <div className="temperature-degree">°C</div>
          </div>
        </div>
        <Forecast coordinates={weather.coordinates} city={weather.city} />
      </div>
    );
  } else {
    search();
    return "Loading Weather...";
  }
}
