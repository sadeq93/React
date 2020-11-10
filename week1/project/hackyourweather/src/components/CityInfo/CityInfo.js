import React from 'react';
const CityInfo = ({weatherCity}) => {
    const {city,country,main,desciption,max,min,lon,lat} = weatherCity
    return (
        <div className = 'showBox' >
            <h3>{city}</h3>
            <h6>{country}</h6>
            <p>{main}</p>
            <p>{desciption}</p>
            <p>{max}</p>
            <p>{min}</p>
            <p> longitude :{lon} , lattitude {lat}</p>
        </div> );
}
 
export default CityInfo;