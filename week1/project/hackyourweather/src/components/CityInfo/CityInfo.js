import React from "react";
const CityInfo = ({ weatherCity }) => {
  const { city, country, main, description, max, min, lon, lat } = weatherCity;
  return (
    <div className="showBox">
      <p>{city}</p>
      <p>{country}</p>
      <p>{main}</p>
      <p>{description}</p>
      <p>{max}</p>
      <p>{min}</p>
      <p>
        longitude :{lon} , latitude {lat}
      </p>
    </div>
  );
};

export default CityInfo;
