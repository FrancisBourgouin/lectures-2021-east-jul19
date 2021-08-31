import { storiesOf } from '@storybook/react';
import PlantListItem from '../components/PlantListItem'

const wellWatered = {
  id: 1,
  name: "Peace Lily",
  type: "Flower",
  wateringInterval: 3,
  lastWatered: "Tue, 31 Aug 2021 14:18:51 GMT"
}

const needWatering = {
  id: 1,
  name: "Peace Lily",
  type: "Flower",
  wateringInterval: 3,
  lastWatered: "Tue, 24 Aug 2021 14:18:51 GMT"
}


storiesOf("PlantListItem", module)
  .add("Invalid PlantList Item", () => <PlantListItem />)
  .add("Well watered", () => <PlantListItem {...wellWatered} />)
  .add("Needs water", () => <PlantListItem {...needWatering} />)