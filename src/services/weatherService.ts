import type { Weather } from "../types/weather";
import { ErrorTextEnum } from "../enums/error-text.enum";

export async function getWeather(cityName: string): Promise<Weather> {
  const responseGeo = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}`,
  );

  if (!responseGeo.ok) {
    throw new Error(ErrorTextEnum.ERROR_FETCHING_CITY);
  }

  const dataGeo = await responseGeo.json();

  if (!dataGeo.results || dataGeo.results.length === 0) {
    throw new Error(ErrorTextEnum.CITY_NOT_FOUND);
  }

  const latitude = dataGeo.results[0].latitude;
  const longitude = dataGeo.results[0].longitude;

  const responseWeather = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=auto`,
  );

  if (!responseWeather.ok) {
    throw new Error(ErrorTextEnum.ERROR_FETCHING_FORECAST);
  }

  const dataWeather: Weather = await responseWeather.json();

  return dataWeather;
}
