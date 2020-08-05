import React from "react";
import "./forecast.css";

export default function Forecast() {
  return (
    <div className="weeklyForecast">
      <h4>
        <strong> Weekly forecast </strong>
      </h4>
      <div className="row" id="forecast">
        <div className="col-2">
          <h6>12:30</h6>
          <div className="iconcirclemini">
            <span className="gradientsmall">
              <img
                alt="Partly_cloudy"
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                width="60px"
              />
            </span>
          </div>
          <div className="weatherForecastTemperature">
            <strong> 16°</strong>14°
          </div>
        </div>
        <div className="col-2">
          <h6>12:30</h6>
          <div className="iconcirclemini">
            <span className="gradientsmall">
              <img
                alt="Partly_cloudy"
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                width="60px"
              />
            </span>
          </div>
          <div className="weatherForecastTemperature">
            <strong> 16°</strong>14°
          </div>
        </div>
        <div className="col-2">
          <h6>12:30</h6>
          <div className="iconcirclemini">
            <span className="gradientsmall">
              <img
                alt="Partly_cloudy"
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                width="60px"
              />
            </span>
          </div>
          <div className="weatherForecastTemperature">
            <strong> 16°</strong>14°
          </div>
        </div>
        <div className="col-2">
          <h6>12:30</h6>
          <div className="iconcirclemini">
            <span className="gradientsmall">
              <img
                alt="Partly_cloudy"
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                width="60px"
              />
            </span>
          </div>
          <div className="weatherForecastTemperature">
            <strong> 16°</strong>14°
          </div>
        </div>
        <div className="col-2">
          <h6>12:30</h6>
          <div className="iconcirclemini">
            <span className="gradientsmall">
              <img
                alt="Partly_cloudy"
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                width="60px"
              />
            </span>
          </div>
          <div className="weatherForecastTemperature">
            <strong> 16°</strong>14°
          </div>
        </div>
        <div className="col-2">
          <h6>12:30</h6>
          <div className="iconcirclemini">
            <span className="gradientsmall">
              <img
                alt="Partly_cloudy"
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                width="60px"
              />
            </span>
          </div>
          <div className="weatherForecastTemperature">
            <strong> 16°</strong>14°
          </div>
        </div>
      </div>
    </div>
  );
}
