import { Paper, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useStyles } from "../../utils/styles";
import { FULL_API_URL } from '../../utils/Weatherapi';
import axios from 'axios';

import CloudIcon from '@material-ui/icons/Cloud';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import GrainIcon from '@material-ui/icons/Grain';
import ClearAllIcon from '@material-ui/icons/ClearAll';



function WeatherCard() {
  const [weather, setWeather] = useState({});
  const weatherApiUrl = FULL_API_URL;

  function getWeather(){
    axios.get("https://api.openweathermap.org/data/2.5/weather?q=Brussels&appid=2cd3d64cd2c2c89d9a3d8396fb9f658d&units=metric")
    // .then(res => res.json())
    .then ((result) => {
      setWeather(result.data);
    });
  };
  
  function WeatherIcon(props){
    const actualWeather = props.weather;
    if (actualWeather === 'Clouds'){
      return <CloudIcon />
    } else if (actualWeather === 'Clouds'){
      return <WbSunnyIcon />
    } else if (actualWeather === 'Fog') {
      return <ClearAllIcon />
    } 
    else {
      return <WbSunnyIcon />
    }
  }

  useEffect(() => {
    getWeather();
    setInterval(() => getWeather(), 180000);
  }, []);

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
  return (typeof weather.main != "undefined") ? (
      <div>
        <Paper elevation={3} className={`${classes.paper}`}>
          <div className="date-box">
            <div className="date">
            <Typography variant='subtitle1' className={classes.paperTypography}>
                {dateBuilder(new Date())}
              </Typography>
            </div>
          </div>
          <div className="weather-box">
            <div className="temp">
            <Typography variant='subtitle2' className={classes.paperTypography}>
                {Math.round(weather.main.temp)}°c
              </Typography>
            </div>
            <div className="weather">
            <Typography variant='body1' className={classes.paperTypography}>
                {weather.weather[0].main}
              </Typography>
            </div>
            <div className="weatherIcon">
              <WeatherIcon weather={weather.weather[0].main}/>
            </div>
          </div>
        </Paper>
      </div>
  ) : ("");
}

export default WeatherCard
