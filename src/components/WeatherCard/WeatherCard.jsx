import { Paper } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useStyles } from "../../utils/styles";
import WeatherApi from '../../utils/Weatherapi';
import axios from 'axios';



function WeatherCard() {
  const [weather, setWeather] = useState({})
  const { weatherApiUrl } = WeatherApi

  function getWeather(){
    axios.get(weatherApiUrl)
    .then(res => res.json())
    .then (result => {
      setWeather(result);
      console.log(weather);
    });
  };
  
// useEffect(() => {
//   setInterval(() => getWeather(), 18000);
// }, []);

  const classes = useStyles();
  const dateBuilder = (d) => {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`
  };

  return (
    <div>
      <Paper elevation={3} className={`${classes.paper} ${classes.paperWeather}`}>
        <div className="date-box">
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">
            15C
          </div>
          <div className="weather">
            Sunny
          </div>
        </div>
      </Paper>
    </div>
  )
}

export default WeatherCard
