import { useMemo } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { useWeatherContext } from "../context/WeatherContext";

function WeatherChart() {
  const { weather } = useWeatherContext();

  const chartData = useMemo(() => {
    if (!weather) {
      return [];
    }

    return weather.daily.time.map((date, index) => ({
      date,
      max: weather.daily.temperature_2m_max[index],
      min: weather.daily.temperature_2m_min[index],
    }));
  }, [weather]);

  if (!weather) {
    return null;
  }

  return (
    <ResponsiveContainer width="90%" height={300}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="max" name="High" />
        <Line type="monotone" dataKey="min" name="Low" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default WeatherChart;
