import React, { useState } from "react";
import Main from "./main";
import Forecast from "./forecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setTemperature(Math.round(response.data.main.temp));
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-1">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary width-150"
              />
            </div>
          </div>
        </form>
        <Main />
        <Forecast />
      </div>
    );
  } else {
    const apiKey = "e8afed4d9a3d0f7582b3f63e5e950faf";
    let city = "Copenhagen";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  return "Loading city...";
}
