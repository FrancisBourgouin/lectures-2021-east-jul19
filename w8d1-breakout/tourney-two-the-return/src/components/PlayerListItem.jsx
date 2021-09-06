export default function PlayerListItem(props) {

  const { gamerTag, firstName, lastName, wins } = props
  return (
    <article className="Player">
      <h1>{firstName} <span>{gamerTag}</span> {lastName}</h1>
      {wins === 0 && <h2 className="zero">Currently with no wins</h2>}
      {wins === 1 && <h2>Currently at {wins} win</h2>}
      {wins > 1 && <h2>Currently at {wins} wins</h2>}
    </article>
  );

}