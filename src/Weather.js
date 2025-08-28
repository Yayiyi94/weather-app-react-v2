import React from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

export default function Weather() {
  function displayWeather(response) {
    alert(`The weather in New York is ${response.data.temperature.current}°C`);
  }
  let apiKey = "10fa90a2o832483bf734tfe8a27fcdad";
  let units = "metric";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=New York&key=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWeather);
  return (
    <div>
      <h2>Hello from Weather</h2>
      <ClipLoader color="#36d7b7" size={50} />
    </div>
  );
}
