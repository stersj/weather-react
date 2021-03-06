import React from "react";
import "./main.css";
import Temperature from "./Temperature";
import Icon from "./icon";
import DateFormat from "./dateformat";

export default function Main(props) {
  return (
    <div className="weather-main">
      <div className="row mt-3">
        <div className="col-4">
          <h2 className="location">{props.data.city}</h2>
          <h3 className="weathercondition">
            {" "}
            <span className="text-capitalize">{props.data.description}</span>
          </h3>
          <h4 className="weathertimedate">
            {" "}
            <DateFormat date={props.data.date} />
          </h4>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <div className="clearfix">
            <div className="main-icon">
              <Icon code={props.data.icon} />{" "}
            </div>
          </div>
        </div>
        <div className="col-3">
          <Temperature celsius={props.data.temperature} />
        </div>
        <div className="col-7">
          <div className="weatherParameters">
            <ul className="Parameters">
              <li className="feels">
                <strong>Feels like </strong>:{" "}
                {Math.round(props.data.temperature)} °C
              </li>
              <li className="humidity">
                <strong>Humidity</strong> : {props.data.humidity} %
              </li>
              <li className="wind">
                <strong>Wind </strong>: {props.data.wind} m/s
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
