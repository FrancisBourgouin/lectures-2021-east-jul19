import axios from 'axios'
import { useEffect, useState } from 'react'

export default function CurrentWeather(props) {
  const { city } = props
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
    if (city) {
      const key = "09fd719b4b698ec0260e424f83378e3d"
      const url = `//api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
      axios
        .get(url)
        .then(res => {
          setWeatherData(res.data)
        })
    }
  }, [city])

  return (
    <div>
      {weatherData &&
        <>
          <h1>Current weather for {city}</h1>
          <p>It is currently {weatherData.main.temp}</p>
          <p>And the weather looks like {weatherData.weather[0].description}</p>
        </>
      }
    </div>
  )
}