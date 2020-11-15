import "./App.css";
import "./components/CityInfo/CityInfo.css";
import CityInfo from "./components/CityInfo/CityInfo";
import cityWeather from "./components/CityInfo/city-weather.json";
function App() {
  return (
    <div className="App">
      <h1>Weather</h1>
      {cityWeather.map((city) => {
        return (
          <CityInfo
            weatherCity={{
              city: city.name,
              country: city.sys.country,
              description: city.weather[0].description,
              max: city.main.temp_max,
              min: city.main.temp_min,
              lon: city.coord.lon,
              lat: city.coord.lat,
            }}
            key={city.id}
          />
        );
      })}
    </div>
  );
}

export default App;
