import { useState } from "react"
import "./TweetForm.css"

export default function TweetForm(props) {
  const { addNewTweet } = props
  const [tweetText, setTweetText] = useState("")

  const tweetRemainingLength = 140 - tweetText.length
  const spanStyle = { color: tweetRemainingLength >= 0 ? "black" : "red" }

  const submitTweet = event => {
    event.preventDefault()
    if (tweetRemainingLength >= 0 && tweetRemainingLength < 140) {
      addNewTweet(tweetText)
      setTweetText("")
    }
  }

  return (
    <section className="newtweet">
      <form onSubmit={submitTweet} className="newtweet__form">
        <textarea className="form__textarea" name="text" value={tweetText} placeholder="What are you humming about?" onChange={event => setTweetText(event.target.value)}></textarea>
        <input type="submit" value="Tweet" className="form__input" />
        <span style={spanStyle} className="form__counter">{tweetRemainingLength}</span>
      </form>
    </section>
  )
}