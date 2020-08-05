import React from "react";
import Main from "./main";
import Forecast from "./forecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "e8afed4d9a3d0f7582b3f63e5e950faf";
  let city = "Copenhagen";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Container">
      <h1> SparkVejr.</h1>
      <div className="Form">
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
      </div>
      <Main />
      <Forecast />
    </div>
  );
}
