import { useWeatherContext } from "../context/WeatherContext";

function SearchBar() {
  const { city, setCity, searchWeather, loadInitialLocation } =
    useWeatherContext();

  function handleSearch() {
    if (!city.trim()) {
      return;
    }

    searchWeather(city);
  }

  return (
    <section id="search">
      <input
        type="text"
        placeholder="Digite uma cidade"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />

      <button onClick={handleSearch}>🔎 Search</button>

      <button onClick={loadInitialLocation}>📍 My Location</button>
    </section>
  );
}

export default SearchBar;
