import "./App.css";

import SearchBar from "./components/SearchBar";
import WeatherCards from "./components/WeatherCards";
import WeatherChart from "./components/WeatherChart";
import ThemeButton from "./components/ThemeButton";

import { useWeatherContext } from "./context/WeatherContext";

function App() {
  const { location, loading, error } = useWeatherContext();

  return (
    <>
      <header>
        <h1>Frontend Challenge</h1>
        <h2>Weather Data</h2>

        <ThemeButton />
      </header>

      <SearchBar />

      <section id="weather">
        <h3 id="location">Location: {location}</h3>
        {loading && <p>⏳ Carregando dados meteorológicos</p>}

        {error && <p className="error">⚠️ {error}</p>}

        {!loading && !error && (
          <>
            <WeatherCards />

            <h4>7-Day Temperature Forecast 🌡️📊</h4>
            <WeatherChart />
          </>
        )}
      </section>
    </>
  );
}

export default App;
