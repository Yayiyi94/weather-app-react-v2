import "./App.css";
import Weather from "./Weather";
import { useState } from "react";

function App() {
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
