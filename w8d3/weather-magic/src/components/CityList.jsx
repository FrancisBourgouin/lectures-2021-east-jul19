export default function CityList(props) {
  const { cityList, selectCity } = props

  const parsedCityButtons = cityList.map(
    city => <button onClick={() => selectCity(city)} id={city}>{city}</button>
  )

  return (
    <div>
      {parsedCityButtons}
    </div>
  )
}