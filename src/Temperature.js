import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celcius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celcius") {
    return (
      <div className="weather-temperature">
        <span className="unit">
          °C |
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="weather-temperature">
        <span className="fahrenheit-temperature">
          {Math.round(fahrenheit())}
        </span>
        <span className="unit">
          °C |
          <a href="/" onClick={showCelcius}>
            °F
          </a>
        </span>
      </div>
    );
  }
}
