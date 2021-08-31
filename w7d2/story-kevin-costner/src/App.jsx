import './App.css';
import { plantsOriginalData } from './data/plantData';
import PlantList from './components/PlantList';

function App() {
  return (
    <div className="App">
      <PlantList plantsOriginalData={plantsOriginalData} />
    </div>
  );
}

export default App;
