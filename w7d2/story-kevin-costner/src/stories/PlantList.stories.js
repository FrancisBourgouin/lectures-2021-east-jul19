import { storiesOf } from '@storybook/react';
import PlantList from '../components/PlantList'
import { plantsOriginalData } from "../data/plantData"


storiesOf("PlantList", module)
  .add("Invalid PlantList", () => <PlantList />)
  .add("Valid PlantList", () => <PlantList plantsOriginalData={plantsOriginalData} />)