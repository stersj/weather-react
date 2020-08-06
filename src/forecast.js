import React, { useState } from "react";
import "./forecast.css";
import axios from "axios";
import Icon from "./icon";

export default function Forecast(props) {
  const [checked, setChecked] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data);
    setChecked(true);
  }

  if (checked && props.city === forecast.city.name) {
    return (
      <div className="weeklyForecast">
        <h4>
          <strong> Weekly forecast </strong>
        </h4>
        <div className="col-2">
          {hour()}
          <div className="icon">
            <span className="gradientsmall">
              <Icon code={props.data.weather[0].icon} />
            </span>
          </div>
          <div className="weatherForecastTemperature">
            <strong> {temperature()}</strong>14°
          </div>
        </div>
        <div className="col-2">
          <h6>12:30</h6>
          <div className="icon">
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
          <div className="icon">
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
          <div className="icon">
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
          <div className="icon">
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
          <div className="icon">
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
    );
  } else {
    const apiKey = "e8afed4d9a3d0f7582b3f63e5e950faf";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
