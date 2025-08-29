import "./App.css";
import Weather from "./Weather";
import Forecast from "./Forecast";
import { useState } from "react";

function App() {
  const [coordinates, setCoordinates] = useState(null);

  // Esta función recibe los datos del clima desde Weather
  function handleWeatherUpdate(weatherData) {
    setCoordinates(weatherData.coordinates);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Weather defaultCity="..." />
        <footer>
          Coded by Yadira DLTR, code hosted on{" "}
          <a
            href="https://github.com/Yayiyi94/weather-app-react-v2"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and website hosted on{" "}
          <a
            href="https://weather-react-ydltr.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </header>
    </div>
  );
}

export default App;
