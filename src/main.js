import React from "react";
import "./main.css";

export default function Main(props) {
  function showFahrenheit(event) {
    event.preventDefault();
    let temperature = (props.temperature * 9) / 5 + 32;
    alert(`The temperature in fahrenheit is ${Math.round(temperature)}°F`);
  }

  return (
    <div>
      <div className="row">
        <div className="col-6">
          <h2 className="location" id="city">
            {" "}
            Birkerød, Denmark{" "}
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
          <div className="iconcircle">
            <span className="gradientbig">
              <img src="icon/01d.png" alt="" class="float-left" />
            </span>
          </div>
        </div>
        <div className="col-3">
          <div className="weathertemperature">
            <div class="float-left">
              <div className="temph" id="w_temp">
                <p className="temperature" temperature={24}>
                  24
                </p>
                <span className="units">
                  <a href="/" id="unitC" class="active">
                    °C{" "}
                  </a>
                  |
                  <a href="/" onClick={showFahrenheit}>
                    °F
                  </a>
                </span>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
