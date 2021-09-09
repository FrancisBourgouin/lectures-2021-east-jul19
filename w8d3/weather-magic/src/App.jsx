import './App.css';
import CityForm from './components/CityForm';
import CurrentWeather from './components/CurrentWeather';
import CityList from './components/CityList';
import axios from 'axios'
import { useState } from 'react';
// 09fd719b4b698ec0260e424f83378e3d
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

function App() {
  const [city, setCity] = useState("")
  const [cityList, setCityList] = useState([])

  const addCity = (formData) => {
    const { city } = formData
    setCity(city)

    if (!cityList.includes(city)) {
      setCityList([...cityList, city])
    }
  }

  const selectCity = (cityName) => {
    setCity(cityName)
  }

  return (
    <div className="App">
      <h1>Super weather yeah.</h1>
      <CityForm onSubmit={addCity} />
      <CityList cityList={cityList} selectCity={selectCity} />
      <CurrentWeather city={city} />
    </div>
  );
}

export default App;
