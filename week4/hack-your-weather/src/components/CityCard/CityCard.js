import React from "react";
import { Link } from "react-router-dom";
import "../CityCard/CityCard.css";
const CityCard = ({
  weather,
  hasError,
  isLoading,
  validName,
  deleteCard,
  setCityId,
}) => {
  return (
    <div>
      {isLoading && <p>Loading ... </p>}
      {weather.name && !hasError && (
        <div className="CityCard">
          <button onClick={deleteCard}>X</button>

          <p onClick={setCityId}>
            City :<Link to={`/home/${weather.id}`}>{weather.name}</Link>
          </p>
          <p>country :{weather.sys.country}</p>
          <p>{weather.weather[0].description}</p>
          <p>Max :{weather.main.temp_max} °C</p>
          <p>Min :{weather.main.temp_min} °C</p>
          <p>
            Location : {weather.coord.lon} , {weather.coord.lat}
          </p>
        </div>
      )}
      {validName && <p>Write valid City name</p>}
    </div>
  );
};

export default CityCard;
