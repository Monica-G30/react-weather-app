import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="Search"
              placeholder="Enter a city"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="Submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Nairobi</h1>
      <ul>
        <li>Wednesday 13:00</li>
        <li>Mostly sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix mt-3">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Mostly sunny"
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">27</span>
              <span className="unit">ºC</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 23%</li>
            <li>Wind: 14km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
