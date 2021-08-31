import PlantListItem from "./PlantListItem"

export default function PlantList(props) {
  const { plantsOriginalData } = props
  const plantsArray = plantsOriginalData ? Object.values(plantsOriginalData) : []
  const parsedPlants = plantsArray.map(plant => <PlantListItem key={plant.id} {...plant} />)

  return (
    <section>
      {parsedPlants}
    </section>
  )
}