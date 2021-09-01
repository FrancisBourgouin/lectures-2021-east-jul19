import { useState } from 'react';

import PlayerForm from './components/PlayerForm';
import PlayerList from './components/PlayerList';

import { playerData } from './data/playerData.js'

import './App.css';

function App() {
  const [players, setPlayers] = useState(playerData)

  const playerArr = Object.values(players)

  const addNewPlayer = (name, nickname) => {
    const id = playerArr.length + 1
    const newPlayerObj = {
      id,
      name,
      nickname,
      wins: 0
    }
    // const newPlayers = {...players, [id]:newPlayerObj}
    const newPlayers = { ...players }
    newPlayers[id] = newPlayerObj
    setPlayers(newPlayers)
  }

  const addOneWin = (id) => {
    const updatedPlayer = { ...players[id] }
    updatedPlayer.wins++
    const updatedPlayers = { ...players, [id]: updatedPlayer }

    setPlayers(updatedPlayers)

    // const updatedPlayer2 = { ...players[id] }
    // updatedPlayer2.wins++
    // const updatedPlayers2 = { ...players, [id]: updatedPlayer2 }

    // setPlayers(updatedPlayers2)


    setPlayers(prevState => {
      const updatedPlayer = { ...prevState[id] }
      updatedPlayer.wins++
      const updatedPlayers = { ...prevState, [id]: updatedPlayer }

      return updatedPlayers
    })
  }

  const superMegaWinOfDestinyToEveryone = () => {
    for (const key in players) {
      addOneWin(key)
    }
  }

  return (
    <div className="App">
      <PlayerForm onSubmit={addNewPlayer} />
      <PlayerList players={playerArr} addOneWin={addOneWin} />
      <button onClick={superMegaWinOfDestinyToEveryone}>POWER WIN</button>
    </div>
  );
}

export default App;
