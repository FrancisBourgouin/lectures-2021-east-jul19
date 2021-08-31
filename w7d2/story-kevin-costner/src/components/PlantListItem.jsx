import "./PlantListItem.css"
import * as timeago from 'timeago.js'

export default function PlantListItem(props) {
  const { name, type, wateringInterval, lastWatered } = props
  const isValid = name && type && wateringInterval && lastWatered

  const lastWateredDate = new Date(lastWatered)
  const todayDate = new Date()
  const diffTime = todayDate - lastWateredDate
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  const plantClass = diffDays > wateringInterval ? 'bad' : 'good'
  return (
    <>
      {isValid &&
        <article className={plantClass}>
          <h1>{name}</h1>
          <h1>{type}</h1>
          <h1>{lastWatered}</h1>
          <h1>Every {wateringInterval} days</h1>
          <p>{diffDays}</p>
        </article>
      }
      {!isValid && <h1>Plant data invalid</h1>}
    </>
  )
}