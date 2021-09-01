// props
// id,
// name,
// nickname,
// wins
export default function PlayerListItem(props) {
  const { name, nickname, wins, onClick } = props

  return (
    <article>
      <h1>{name} aka. {nickname}</h1>
      {wins === 0 && <p>No wins yet!</p>}
      {wins === 1 && <p>One great win</p>}
      {wins > 1 && <p>{wins} wins</p>}
      <button onClick={onClick}>Add one win</button>
    </article>
  )
}