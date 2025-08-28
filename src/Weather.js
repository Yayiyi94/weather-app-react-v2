import React from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import { BeatLoader, FadeLoader } from "react-spinners";

export default function Weather() {
  function displayWeather(response) {
    alert(
      `The weather in New York is ${Math.round(
        response.data.temperature.current
      )}°C`
    );
  }
  let apiKey = "10fa90a2o832483bf734tfe8a27fcdad";
  let units = "metric";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=New York&key=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWeather);
  return (
    <div>
      <h2>Hello from Weather</h2>
      <BeatLoader color="#1d8de7" size={15} />
    </div>
  );
}
