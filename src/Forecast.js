import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Weather.css";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    // SheCodes devuelve la data en response.data.daily
    const dailyForecasts = response.data.daily.map((day) => {
      return {
        dt: day.time, // fecha
        temp: {
          max: day.temperature.maximum,
          min: day.temperature.minimum,
        },
        weather: [
          {
            description: day.condition.description,
            icon: day.condition.icon_url,
          },
        ],
      };
    });

    // Tomamos solo los próximos 5 días
    setForecast(dailyForecasts.slice(0, 5));
    setLoaded(true);
  }

  useEffect(() => {
    function loadForecast() {
      if (!props.coordinates) return; // seguridad, por si aún no cargan

      let apiKey = "10fa90a2o832483bf734tfe8a27fcdad";
      let longitude = props.coordinates.lon;
      let latitude = props.coordinates.lat;

      let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

      setLoaded(false);
      axios.get(apiUrl).then(handleResponse);
    }

    loadForecast();
  }, [props.coordinates]);

  if (loaded) {
    return (
      <div className="WeatherForecast mt-4">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">5-Day Forecast</h5>
          </div>
          <div className="card-body">
            <div className="row g-2">
              {forecast.map(function (dailyForecast, index) {
                return (
                  <div className="col" key={index}>
                    <ForecastDay data={dailyForecast} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherForecast mt-4">
        <div className="card">
          <div className="card-body text-center">
            <div
              className="spinner-border spinner-border-sm text-primary"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-2 mb-0 text-muted">Loading forecast...</p>
          </div>
        </div>
      </div>
    );
  }
}
