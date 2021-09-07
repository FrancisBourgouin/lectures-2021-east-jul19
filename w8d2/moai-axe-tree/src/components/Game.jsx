import React, { useEffect, useState } from 'react'
import { determineWinner, startRound } from '../helpers/gameHelpers'
import Computer from './Computer'
import Player from './Player'
import Result from './Result'

export default function Game(props) {
  const [state, setState] = useState({
    isCheating: true,
    playerItem: null,
    result: null
  })
  const { isCheating, playerItem, result } = state

  const updatePlayerChoice = (playerChoice) => {
    setState({ ...state, playerItem: playerChoice })
  }

  const toggleRobotCheatingMode = () => {
    setState({ ...state, isCheating: !state.isCheating })
  }

  useEffect(() => {
    if (playerItem) {
      const matchResult = startRound(isCheating, playerItem)
      const resultMessage = determineWinner(matchResult.player, matchResult.computer)
      setState({ ...state, result: resultMessage })
    }
  }, [playerItem])
  return (
    <div>
      <main className="game">
        <Computer isCheating={isCheating} toggleRobotCheatingMode={toggleRobotCheatingMode} />
        <Player updatePlayerChoice={updatePlayerChoice} />
      </main>
      <Result message={result} />
    </div>
  )
}