
const API_URL = process.env.REACT_APP_WEATHER_API_URL;
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const LOCATION = 'Brussels';
export const FULL_API_URL = `${API_URL}?q=${LOCATION}&appid=${API_KEY}&units=metric`;

function WeatherApi() {
  return {FULL_API_URL}
}

export default WeatherApi;
