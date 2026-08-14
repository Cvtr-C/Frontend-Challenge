export interface WeatherCondition {
  icon: string;
  label: string;
  className: string;
}

export function getWeatherCondition(weatherCode: number): WeatherCondition {
  if (weatherCode === 0) {
    return {
      icon: "☀️",
      label: "Sunny",
      className: "clear",
    };
  }

  if (weatherCode === 1 || weatherCode === 2) {
    return {
      icon: "🌤️",
      label: "Partly cloudy",
      className: "partly-cloudy",
    };
  }

  if (weatherCode === 3) {
    return {
      icon: "☁️",
      label: "Cloudy",
      className: "cloudy",
    };
  }

  if (weatherCode === 45 || weatherCode === 48) {
    return {
      icon: "🌫️",
      label: "Fog",
      className: "fog",
    };
  }

  if (weatherCode >= 51 && weatherCode <= 57) {
    return {
      icon: "🌦️",
      label: "Drizzle",
      className: "drizzle",
    };
  }

  if (weatherCode >= 61 && weatherCode <= 67) {
    return {
      icon: "🌧️",
      label: "Rainy",
      className: "rain",
    };
  }

  if (weatherCode >= 71 && weatherCode <= 77) {
    return {
      icon: "❄️",
      label: "Snow",
      className: "snow",
    };
  }

  if (weatherCode >= 80 && weatherCode <= 82) {
    return {
      icon: "🌦️",
      label: "Rain showers",
      className: "rain-showers",
    };
  }

  if (weatherCode >= 85 && weatherCode <= 86) {
    return {
      icon: "🌨️",
      label: "Snow showers",
      className: "snow-showers",
    };
  }

  if (weatherCode >= 95 && weatherCode <= 99) {
    return {
      icon: "⛈️",
      label: "Thunderstorm",
      className: "thunderstorm",
    };
  }

  return {
    icon: "❓",
    label: "Unknown condition",
    className: "unknown",
  };
}
