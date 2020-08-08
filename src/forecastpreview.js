import React from "react";
import Icon from "./icon";
import "./forecast.css";

export default function ForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperatureMax() {
    let temperature = Math.round(props.data.main.temp_max);

    return `${temperature}°C`;
  }
  function temperatureMin() {
    let temperature = Math.round(props.data.main.temp_min);

    return `${temperature}°C`;
  }
  return (
    <div className="WeatherForecastPreview col">
      <div className="hours">{hours()} </div>

      <Icon className="icons" code={props.data.weather[0].icon} />

      <div className="temp-min-max">
        <strong>High:</strong> {temperatureMax()}
        <br />
        <strong>Low:</strong> {temperatureMin()}
      </div>
    </div>
  );
}
