import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> SparkVejr.</h1>
        <Weather defaultCity="Penang" />
        <div className="footer">
          <small class="text-muted">
            <a
              href="https://github.com/stersj/weather-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open-source code
            </a>
            , by
            <a
              href="https://www.linkedin.com/in/esther-sim-jensen-47bb3120/"
              class="profileLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Esther Sim
            </a>
            , Hosted on
            <a
              href="https://eager-edison-a06de0.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              , Netlify
            </a>
          </small>
        </div>
      </div>
    </div>
  );
}

export default App;
