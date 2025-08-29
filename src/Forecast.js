import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Weather.css";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    setLoaded(false);
    let apiKey = "10fa90a2o832483bf734tfe8a27fcdad";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then((response) => {
      if (response.data && response.data.daily) {
        setForecast(response.data.daily);
      } else {
        setForecast([]);
      }
      setLoaded(true);
    });
  }, [props.city]);

  if (!loaded) {
    return (
      <div className="WeatherForecast row">
        {forecast.map(function (day, index) {
          if (index < 5) {
            return (
              <div className="col" key={index}>
                <ForecastDay data={day} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    return (
      <div>
        <p>Loading Forecast...</p>
      </div>
    );
  }
}
