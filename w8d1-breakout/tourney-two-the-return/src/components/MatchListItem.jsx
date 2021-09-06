export default function MatchListItem(props) {

  const { players, winner, scoreDifference, onClick } = props;
  return (
    <article className="Match">
      <h1>{players[0]} <span>vs</span> {players[1]}</h1>
      {winner && <h2>{winner} is the winner by {scoreDifference}!</h2>}
      {!winner && <h2>No winners yet!</h2>}
      <button onClick={() => onClick(players[0])}>{players[0]}</button>
      <button onClick={() => onClick(players[1])}>,{players[1]}</button>
    </article>
  );
}


