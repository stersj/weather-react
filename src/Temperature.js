import React, { useState } from "react";
import "./main.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celcius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <div className="weather-temperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <div className="conversionunits">
          <div className="unit">
            °C |
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="weather-temperature">
        <span className="fahrenheit-temperature">
          {Math.round(fahrenheit())}
        </span>
        <div className="unit">
          °C |
          <a href="/" onClick={showCelcius}>
            °F
          </a>
        </div>
      </div>
    );
  }
}
