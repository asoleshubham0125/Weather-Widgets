import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import "./WeatherApp.css";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    temp: 25.05,
    tempMin: 24,
    tempMax: 28,
    humidity: 47,
    feelsLike: 24.05,
    weather: "haze",
    city: "Mumbai",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <>
      <div className="weather-container">
        <div className="weather-card">
          <h2>Weather App</h2>
          <SearchBox updateInfo={updateInfo} />
          <InfoBox info={weatherInfo} />
        </div>
      </div>
    </>
  );
}
