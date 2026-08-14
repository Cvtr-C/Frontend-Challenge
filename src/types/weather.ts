export interface Weather {
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  };

  current: {
    temperature_2m: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
    weather_code: number;
  };
}
