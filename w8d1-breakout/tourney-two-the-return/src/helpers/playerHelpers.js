export const updateWinsForPlayer = (players, matches, gamerTag) => {
  const wonMatches = matches.filter(match => match.winner === gamerTag)
  const numberOfWins = wonMatches.length

  const updatedPlayer = { ...players[gamerTag], wins: numberOfWins }

  const updatedPlayerList = { ...players, [gamerTag]: updatedPlayer }

  return updatedPlayerList
}


export const updateAllPlayerWins = (state) => {
  let newPlayerList = { ...state.players }

  for (const gamerTag of Object.keys(newPlayerList)) {
    newPlayerList = updateWinsForPlayer(newPlayerList, state.matches, gamerTag)
  }

  return Object.values(newPlayerList)
}

export const betterAllPlayerWins = (playerList, matchList) => {
  matchList.forEach(match => {
    playerList[match.winner].wins++
  })

  return playerList
}