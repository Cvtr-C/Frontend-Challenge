import { useWeatherContext } from "../context/WeatherContext";
import { getWeatherCondition } from "../utils/weatherCondition";

function WeatherCards() {
  const { weather } = useWeatherContext();

  if (!weather) {
    return null;
  }

  const condition = getWeatherCondition(weather.current.weather_code);

  return (
    <>
      <div className={`weather ${condition.className}`}>
        <div className="weather-condition">
          <span aria-hidden="true">{condition.icon}</span>
          <span>{condition.label}</span>
        </div>

        <div>
          <p id="temp">🌡️ Temperature: {weather.current.temperature_2m} °C</p>
        </div>

        <div id="weather-container">
          <p id="umid">💧 Humidity: {weather.current.relative_humidity_2m} %</p>

          <p id="vent">🌬️ Wind: {weather.current.wind_speed_10m} Km/h</p>

          <p id="max">🔥 High: {weather.daily.temperature_2m_max[0]} °C</p>

          <p id="min">❄️ Low: {weather.daily.temperature_2m_min[0]} °C</p>
        </div>
      </div>
    </>
  );
}

export default WeatherCards;
