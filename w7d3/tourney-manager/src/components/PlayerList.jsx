// props
// players (arr)
// addOneWin (fct)

import PlayerListItem from "./PlayerListItem"

export default function PlayerList(props) {
  const { players, addOneWin } = props

  const parsedPlayers = players.map(
    player => <PlayerListItem key={player.id} {...player} onClick={() => addOneWin(player.id)} />
  )

  return (
    <section>
      {parsedPlayers}
    </section>
  )
}