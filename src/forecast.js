import React, { useState } from "react";
import "./forecast.css";
import axios from "axios";
import ForecastPreview from "./forecastpreview";

export default function Forecast(props) {
  const [checked, setChecked] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data);
    setChecked(true);
  }

  if (checked && props.city === forecast.city.name) {
    return (
      <div className="weeklyforecast row">
        <ForecastPreview data={forecast.list[0]} />
        <ForecastPreview data={forecast.list[1]} />
        <ForecastPreview data={forecast.list[2]} />
        <ForecastPreview data={forecast.list[3]} />
        <ForecastPreview data={forecast.list[4]} />
        <ForecastPreview data={forecast.list[5]} />
      </div>
    );
  } else {
    const apiKey = "e8afed4d9a3d0f7582b3f63e5e950faf";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
