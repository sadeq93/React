import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { useParams, Link } from "react-router-dom";
const ChartPage = () => {
  const [city, setCity] = useState([]);
  const [forecastData, setForecastData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const { cityId } = useParams();

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
    const fetchForecastData = async () => {
      const URL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&appid=${API_KEY} `;
      try {
        setLoading(true);
        const response = await fetch(URL);
        const data = await response.json();
        setForecastData(data.list);
        setCity(data.city);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchForecastData();
  }, [cityId]);

  return (
    <div>
      <h1> Five day Forecast </h1>
      {city && (
        <h2>
          {city.name} , {city.country}
        </h2>
      )}
      {hasError && <p> Something went wrong please reload the page again </p>}
      {isLoading && <p> Loading... </p>}
      {forecastData && (
        <AreaChart
          width={400}
          height={200}
          data={forecastData}
          margin={{
            top: 30,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dt_txt" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            name="temp"
            dataKey="main.temp"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      )}
      <h3>
        <Link to="/"> Go Back!</Link>
      </h3>
    </div>
  );
};
export default ChartPage;
