import React from "react";
import "./main.css";

export default function Main(props) {
  function showFahrenheit(event) {
    event.preventDefault();
    let temperature = (props.temperature * 9) / 5 + 32;
    alert(`The temperature in fahrenheit is ${Math.round(temperature)}°F`);
  }

  return (
    <div className="weather-main">
      <div className="row mt-3">
        <div className="col-6">
          <h2 className="location" id="city">
            Birkerød,Denmark
          </h2>
          <h3 className="weathercondition"> Rain</h3>
          <h4 className="weathertimedate"> Last updated: Sunday, 16:44</h4>
          <div className="weatherParameters">
            <ul>
              <li className="feels">Feels like: 12 °C</li>
              <li className="humidity">Humidity: 80 %</li>
              <li className="wind">Wind: 8 m/s</li>
            </ul>
          </div>
        </div>
        <div className="col-3">
          <div className="clearfix">
            <img
              alt="Clear"
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              width="140px"
            />
          </div>
        </div>
        <div className="col-3">
          {" "}
          <span className="temperature">20</span>
          <span className="unit">
            <a href="/" id="unitC" className="active">
              °C
            </a>
            |
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
