import './App.css';
import './components/CityInfo/CityInfo.css';
import CityInfo from './components/CityInfo/CityInfo';
import Citieswother from './components/CityInfo/city-weather.json';
function App() {

  const CityCard = Citieswother.map(city_info =>{
    return(
      <CityInfo weatherCity = {{
        city : city_info.name,
        country : city_info.sys.country,
        desciption :city_info.weather[0].description,
        max :city_info.main.temp_max,
        min :city_info.main.temp_min,
        lon :city_info.coord.lon,
        lat :city_info.coord.lat
      }}
      key ={city_info.id}/>
    );
  }) 
  return (
    <div className="App">
   <h1>Weather</h1>
    {CityCard}
    </div>
  );
}

export default App;
