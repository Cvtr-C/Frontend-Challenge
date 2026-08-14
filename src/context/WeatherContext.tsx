import { createContext, useContext, type ReactNode } from "react";

import { useWeather } from "../hooks/useWeather";

import { ErrorTextEnum } from "../enums/error-text.enum";

interface WeatherContextType {
  city: string;
  setCity: (city: string) => void;

  location: string;

  weather: ReturnType<typeof useWeather>["weather"];

  loading: boolean;

  error: string | null;

  searchWeather: (cityName: string) => Promise<void>;

  loadInitialLocation: () => Promise<void>;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

interface WeatherProviderProps {
  children: ReactNode;
}

export function WeatherProvider({ children }: WeatherProviderProps) {
  const weather = useWeather();

  return (
    <WeatherContext.Provider value={weather}>
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeatherContext() {
  const context = useContext(WeatherContext);

  if (!context) {
    throw new Error(ErrorTextEnum.WEATHERPROVIDER_USEWEATHERCONTEXT);
  }
  return context;
}
