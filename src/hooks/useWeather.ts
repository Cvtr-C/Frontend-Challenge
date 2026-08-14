import { useCallback, useEffect, useState } from "react";

import { getInitialLocation } from "../services/geolocationService";
import { getWeather } from "../services/weatherService";

import type { Weather } from "../types/weather";

import { ErrorTextEnum } from "../enums/error-text.enum";

export function useWeather() {
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchWeather = useCallback(async (cityName: string) => {
    if (!cityName.trim()) {
      return;
    }
    try {
      setLoading(true);
      setError(null);

      const data = await getWeather(cityName);

      setLocation(cityName);
      setWeather(data);
    } catch (error) {
      console.error(error);

      setError(
        error instanceof Error
          ? error.message
          : ErrorTextEnum.ERROR_FETCHING_WEATHER_DATA,
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const loadInitialLocation = useCallback(async () => {
    try {
      setError(null);

      const initialCity = await getInitialLocation();

      setCity(initialCity);

      await searchWeather(initialCity);
    } catch (error) {
      console.error(error);

      setError(
        error instanceof Error
          ? error.message
          : ErrorTextEnum.INFORMATION_NOT_IDENTIFIED,
      );
    }
  }, [searchWeather]);

  useEffect(() => {
    loadInitialLocation();
  }, [loadInitialLocation]);

  return {
    city,
    setCity,

    location,
    weather,

    loading,
    error,

    searchWeather,
    loadInitialLocation,
  };
}
