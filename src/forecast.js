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
              <icon src="icon/01d.png" alt="" className="float-left" />
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
              <icon src="icon/01d.png" alt="" className="float-left" />
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
              <icon src="icon/01d.png" alt="" className="float-left" />
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
              <icon src="icon/01d.png" alt="" className="float-left" />
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
              <icon src="icon/01d.png" alt="" className="float-left" />
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
              <icon src="icon/01d.png" alt="" className="float-left" />
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
