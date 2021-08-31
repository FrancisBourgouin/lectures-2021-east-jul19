import PlantListItem from "./PlantListItem";
import { plantsOriginalData } from "../data/plantData";


export default function PlantList(props) {
  const plantsArray = Object.values(plantsOriginalData)
  const onePlant = plantsArray[0]

  const parsedPlants = plantsArray.map(plant => <PlantListItem key={plant.id} {...plant} />)
  return (
    <section>
      <h1>I AM PLANTLIST</h1>

      {parsedPlants}
      {/* <PlantListItem
        name={onePlant.name}
        type={onePlant.type}
        wateringInterval={onePlant.wateringInterval}
        lastWatered={onePlant.lastWatered}
      />
      <PlantListItem
        plantData={onePlant}
      /> */}
      {/* <PlantListItem
        {...onePlant}
      /> */}
    </section>
  )
}