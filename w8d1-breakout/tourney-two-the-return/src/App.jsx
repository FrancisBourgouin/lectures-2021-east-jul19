import { useEffect, useState } from 'react';

import MatchList from './components/MatchList';
import PlayerList from './components/PlayerList';

import { playerData } from './data/players';
import { matchData } from './data/matches';

import { updateAllPlayerWins, updateWinsForPlayer } from './helpers/playerHelpers'

import './App.scss';

function App() {
  const [state, setState] = useState({
    players: playerData,
    matches: matchData
  })

  const assignWinner = () => {

  }

  return (
    <div className="App">
      <h1>Tourney Matches <span>Where Coding and Tournaments found their Match!</span></h1>
      <PlayerList players={updateAllPlayerWins(state)} />
      <MatchList matches={state.matches} assignWinner={assignWinner} />
    </div>
  );
}

export default App;
