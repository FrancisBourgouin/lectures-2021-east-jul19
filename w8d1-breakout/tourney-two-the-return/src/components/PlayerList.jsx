import PlayerListItem from "./PlayerListItem"

export default function PlayerList(props) {
  const { players } = props
  const parsedPlayers = players && Object.values(players).map(player => <PlayerListItem key={player.gamerTag} {...player} />)

  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {parsedPlayers}
    </section>
  )
}