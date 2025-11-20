import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setcity] = useState("");
  let [error, setError] = useState(false);

  const GEO_URL = "https://api.openweathermap.org/geo/1.0/direct";
  const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  let getCoordinates = async (city) => {
    let response = await fetch(`${GEO_URL}?q=${city}&limit=1&appid=${API_KEY}`);
    let jsonResp = await response.json();

    // FIX: safely check for empty OR invalid response
    if (!Array.isArray(jsonResp) || jsonResp.length === 0 || !jsonResp[0].lat) {
      throw new Error("City not found");
    }

    return { lat: jsonResp[0].lat, lon: jsonResp[0].lon };
  };

  let getWeatherInfo = async (city) => {
    const { lat, lon } = await getCoordinates(city);
    const res = await fetch(
      `${WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    const jsonResp = await res.json();

    const result = {
      temp: jsonResp.main.temp,
      tempMin: jsonResp.main.temp_min,
      tempMax: jsonResp.main.temp_max,
      humidity: jsonResp.main.humidity,
      feelsLike: jsonResp.main.feels_like,
      weather: jsonResp.weather[0].description,
      city: jsonResp.name,
    };
    return result;
  };

  let handleChange = (evt) => {
    setcity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      let newinfo = await getWeatherInfo(city);

      updateInfo(newinfo); // show weather

      setError(false); // FIX: reset here
      setcity(""); // reset input
    } catch (err) {
      console.log("Error", err.message);
      setError(true);
    }
  };

  return (
    <>
      <div className="SearchBox">
        <form onSubmit={handleSubmit}>
          <TextField
            id="city"
            label="City Name"
            variant="outlined"
            required
            value={city}
            onChange={handleChange}
          />
          <br></br>
          <br></br>
          <Button variant="contained" type="submit">
            Send
          </Button>
          {error && <p style={{ color: "red" }}>No such place in our API</p>}
        </form>
      </div>
    </>
  );
}
