import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";

export default function InfoBox({ info }) {
  const HOT_URL =
    "https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.jpg?s=612x612&w=0&k=20&c=LwLCGF902C-DNwKgCMCR12zFnB4g1INWzlk1JPOidRk=";
  const COLD_URL =
    "https://media.istockphoto.com/id/638381826/photo/frozen-man-holding-a-thermometer-while-it-is-snowing.jpg?s=612x612&w=0&k=20&c=r4gXEgBQWtdd7hXmpuAhSnr4ZjuqqI02OHT_LRsKjm8=";
  const RAIN_URL =
    "https://media.istockphoto.com/id/624868974/photo/its-raining-in-kolkata.jpg?s=612x612&w=0&k=20&c=GTqHBBmBtUULAAm3XPsbms6JrVp7Z4gjx-Agqe0DrjM=";
  const NORMAL_URL =
    "https://media.istockphoto.com/id/2224408734/photo/landscape-view-of-rainbow.jpg?s=612x612&w=0&k=20&c=P8Pi52TmnnRmWxMevE_8lombAn8wv6cZrvBzO5NIF1Q=";
  return (
    <>
      <div className="InfoBox">
        <div className="cardcontainer">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={
                info.humidity > 80
                  ? RAIN_URL
                  : info.temp > 28
                  ? HOT_URL
                  : info.temp < 20
                  ? COLD_URL
                  : NORMAL_URL
              }
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.city}{" "}
                {info.humidity > 80 ? (
                  <ThunderstormIcon />
                ) : info.temp > 28 ? (
                  <WbSunnyIcon />
                ) : info.temp < 20 ? (
                  <AcUnitIcon />
                ) : (
                  <WbTwilightIcon />
                )}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                component={"span"}
              >
                <p>Temperture: {info.temp}&deg;C</p>
                <p>Humidity: {info.humidity}</p>
                <p>Min Temperture: {info.tempMin}&deg;C</p>
                <p>Max Temperture: {info.tempMax}&deg;C</p>
                <p>
                  The Weather can be described as{" "}
                  <b>
                    <i>{info.weather}</i>
                  </b>{" "}
                  and feels like <b>{info.feelsLike}&deg;C</b>
                </p>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
