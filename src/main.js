import React from "react";
import "./main.css";
import Temperature from "./Temperature";

export default function Main(props) {
  return (
    <div className="weather-main">
      <div className="row mt-3">
        <div className="col-6">
          <h2 className="location">{props.data.city}</h2>
          <h3 className="weathercondition"> Rain</h3>
          <h4 className="weathertimedate"> Last updated: Sunday, 16:44</h4>
          <div className="weatherParameters">
            <ul>
              <li className="feels">Feels like: {props.data.temperature} °C</li>
              <li className="humidity">Humidity:{props.data.humidity} %</li>
              <li className="wind">Wind: {props.data.wind} m/s</li>
            </ul>
          </div>
        </div>
        <div className="col-3">
          <div className="clearfix">
            <img
              alt="Partly_cloudy"
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              width="140px"
            />
          </div>
        </div>
        <div className="col-3">
          <Temperature />
        </div>
      </div>
    </div>
  );
}
