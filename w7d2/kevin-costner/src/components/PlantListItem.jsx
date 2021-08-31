export default function PlantListItem(props) {
  const { name, type, wateringInterval, lastWatered } = props
  // const {name, type, wateringInterval, lastWatered} = props.plantData
  return (
    <section>
      <h1>{name}</h1>
      <h2>{type}</h2>
      <h2>{lastWatered}</h2>
      <p>Every {wateringInterval} days</p>
    </section>
  )
}