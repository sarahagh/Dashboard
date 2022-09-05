import axios from "axios";
import React, { useState } from "react";
import Header from "../header/header";
import { SLayout } from "./layout.style";

function Layout({ children }) {
  const [city] = useState([
    {
      city: "tehran",
      lat: "35.7219",
      long: "51.3347",
    },
    {
      city: "ahvaz",
      lat: "31.3183",
      long: "48.6706",
    },
    {
      city: "esfehan",
      lat: "32.6539",
      long: "51.6660",
    },
    {
      city: "tabriz",
      lat: "38.0792",
      long: "46.2887",
    },
  ]);

  const [weather, setWeather] = useState();

  const handleChangeCity = (e) => {
    const value = e.target.value;

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${
          value?.split("-")[0]
        }&lon=${
          value?.split("-")[1]
        }&appid=744ada605800cb9a15189214f427795d&units=metric 
      `
      )
      .then((res) => {
        setWeather(res.data.main.temp);
      });
  };

  return (
    <SLayout>
      <div className="side-bar">
        <h1>Material Dashboard 2 </h1>

        <hr />

        <ul>
          <li className="selected-item">Dashboard</li>
          <li>Tables</li>
          <li>Billing</li>
          <li>Virtual Reality</li>
          <li>RTL</li>
          <li>Notifications</li>
        </ul>

        <br />
        <div className="weather-section">
          <select onChange={handleChangeCity} name="" id="">
            <option value="">انتخاب کنید</option>
            {city.map((res) => (
              <option value={`${res.lat}-${res.long}`}>{res.city}</option>
            ))}
          </select>
         <h3>
          degree:  {weather}
         </h3>
        </div>
        <br />
      </div>

      <div className="main-content-wrapper">
        <div className="main-content">
          <Header />

          <div>{children}</div>

          <footer></footer>
        </div>
      </div>
    </SLayout>
  );
}

export default Layout;
