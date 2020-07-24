import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./forecast.css";
export default function Forecast() {
  return (
    <div className="weeklyForecast">
      <h4>
        <strong> Weekly forecast </strong>
      </h4>
      <Row id="forecast">
        <Col sm={2}>
          <h6>12:30</h6>
          <div className="iconcirclemini">
            <span className="gradientsmall">
              <icon src="icon/01d.png" alt="" class="float-left" />
            </span>
          </div>
          <div className="weatherForecastTemperature">
            <strong> 16°</strong>14°
          </div>
        </Col>
        <Col sm={2}>
          <h6>12:30</h6>
          <div className="iconcirclemini">
            <span className="gradientsmall">
              <icon src="icon/01d.png" alt="" class="float-left" />
            </span>
          </div>
          <div className="weatherForecastTemperature">
            <strong> 16°</strong>14°
          </div>
        </Col>
        <Col sm={2}>
          <h6>12:30</h6>
          <div className="iconcirclemini">
            <span className="gradientsmall">
              <icon src="icon/01d.png" alt="" class="float-left" />
            </span>
          </div>
          <div className="weatherForecastTemperature">
            <strong> 16°</strong>14°
          </div>
        </Col>
        <Col sm={2}>
          <h6>12:30</h6>
          <div className="iconcirclemini">
            <span className="gradientsmall">
              <icon src="icon/01d.png" alt="" class="float-left" />
            </span>
          </div>
          <div className="weatherForecastTemperature">
            <strong> 16°</strong>14°
          </div>
        </Col>
        <Col sm={2}>
          <h6>12:30</h6>
          <div className="iconcirclemini">
            <span className="gradientsmall">
              <icon src="icon/01d.png" alt="" class="float-left" />
            </span>
          </div>
          <div className="weatherForecastTemperature">
            <strong> 16°</strong>14°
          </div>
        </Col>
        <Col sm={2}>
          <h6>12:30</h6>
          <div className="iconcirclemini">
            <span className="gradientsmall">
              <icon src="icon/01d.png" alt="" class="float-left" />
            </span>
          </div>
          <div className="weatherForecastTemperature">
            <strong> 16°</strong>14°
          </div>
        </Col>
      </Row>
    </div>
  );
}
