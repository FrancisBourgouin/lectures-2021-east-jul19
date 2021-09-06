import { useEffect, useState } from 'react';

import MatchList from './components/MatchList';
import PlayerList from './components/PlayerList';

import { playerData } from './data/players';
import { matchData } from './data/matches';

import './App.scss';

function App() {
  const [state, setState] = useState({
    players: playerData,
    matches: matchData
  })

  // const updateWinsForPlayer = (state, gamerTag) => {
  const updateWinsForPlayer = (state, gamerTag) => {
    const { players, matches } = state
    const wonMatches = matches.filter(match => match.winner === gamerTag)
    const numberOfWins = wonMatches.length

    const updatedPlayer = { ...players[gamerTag], wins: numberOfWins }

    const updatedPlayerList = { ...players, [gamerTag]: updatedPlayer }

    return updatedPlayerList
  }

  const updateWinsForPlayerV2 = (players, matches, gamerTag) => {
    const wonMatches = matches.filter(match => match.winner === gamerTag)
    const numberOfWins = wonMatches.length

    const updatedPlayer = { ...players[gamerTag], wins: numberOfWins }

    const updatedPlayerList = { ...players, [gamerTag]: updatedPlayer }

    return updatedPlayerList
  }

  // const notCoolUpdateWinsForPlayer = (state, gamerTag) => {
  //   const updatedPlayer = { ...players[gamerTag], wins: players[gamerTag].wins++ }
  //   const updatedPlayerList = { ...players, [gamerTag]: updatedPlayer }

  //   return updatedPlayerList
  // }

  useEffect(() => {
    // for (const gamerTag of Object.keys(state.players)) {
    //   const newPlayerList = updateWinsForPlayer(state, gamerTag) BAD

    //   setState({ ...state, players: newPlayerList })
    // }


    // for (const gamerTag of Object.keys(state.players)) {
    //   setState(prev => {
    //     const newPlayerList = updateWinsForPlayer(prev, gamerTag)
    //     return { ...state, players: newPlayerList }
    //   })
    // }


    // const newState = {...state, players:{...state.players}}

    // for (const gamerTag of Object.keys(newState.players)) {
    //   const newPlayerList = updateWinsForPlayer(newState, gamerTag)
    //   newState.players = newPlayerList
    // }
    // setState(newState)
  }, [])

  const updateAllPlayerWins = () => {
    const newState = { ...state, players: { ...state.players } }

    for (const gamerTag of Object.keys(newState.players)) {
      const newPlayerList = updateWinsForPlayer(newState, gamerTag)
      newState.players = newPlayerList
    }

    return Object.values(newState.players)
  }

  const updateAllPlayerWinsV2 = () => {
    let newPlayerList = { ...state.players }

    for (const gamerTag of Object.keys(newPlayerList)) {
      newPlayerList = updateWinsForPlayer(newPlayerList, state.matches, gamerTag)
    }

    return Object.values(newPlayerList)
  }

  return (
    <div className="App">
      <h1>Tourney Matches <span>Where Coding and Tournaments found their Match!</span></h1>
      <PlayerList players={updateAllPlayerWins()} />
      <MatchList matches={state.matches} />
    </div>
  );
}

export default App;
