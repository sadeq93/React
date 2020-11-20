import React, { useState } from "react";
import Search from "../components/Search";
import CityCard from "../components/CityCard/CityCard.js";
const CityWeatherContainer = () => {
  const [weather, setWeather] = useState([]);
  const [cityName, setCityName] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const [validName, setValidName] = useState(false);
  async function fetchWeatherData(city) {
    try {
      setLoading(true);
      const API_Key = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
      const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`;
      const res = await fetch(URL);
      const data = await res.json();
      setWeather([data, ...weather]);

      !data.name && setValidName(true);

      setLoading(false);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setCityName("");
    }
  }
  const deleteCard = (id) => {
    const newWeather = weather.filter((city) => city.id !== id);
    setWeather(newWeather);
  };
  const handleCityName = (event) => {
    const value = event.target.value;
    setCityName(value);
  };

  return (
    <div>
      <h1>Weather</h1>

      <Search
        fetchData={() => fetchWeatherData(cityName)}
        changeName={handleCityName}
        cityName={cityName}
      />
      {weather.map((city) => {
        city.id += Date.now();
        return (
          <CityCard
            weather={city}
            hasError={hasError}
            isLoading={isLoading}
            validName={validName}
            deleteCard={() => deleteCard(city.id)}
            key={city.id}
          />
        );
      })}
    </div>
  );
};

export default CityWeatherContainer;
