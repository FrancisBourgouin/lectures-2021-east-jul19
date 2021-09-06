import MatchListItem from "./MatchListItem"

export default function MatchList(props) {
  const { matches, assignWinner } = props
  const parsedMatches = matches.map(
    match => <MatchListItem key={match.matchNumber} {...match} onClick={assignWinner} />
  )

  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {parsedMatches}
    </section>
  )
}