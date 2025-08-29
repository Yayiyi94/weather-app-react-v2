import "./App.css";
import Weather from "./Weather";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
        <Forecast />

        <footer>
          Coded by Yadira DLTR, code hosted on
          <a href="#" target="_blank">
            {" "}
            GitHub
          </a>{" "}
          and website hosted on
          <a href="#" target="_blank">
            {" "}
            Netfly
          </a>
        </footer>
      </header>
    </div>
  );
}

export default App;
