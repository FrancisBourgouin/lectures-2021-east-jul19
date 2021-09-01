import { useState } from "react"

export default function PlayerForm(props) {
  const { onSubmit } = props

  const [name, setName] = useState("")
  const [nickname, setNickname] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    if (name && nickname) {
      onSubmit(name, nickname)
      setName("")
      setNickname("")
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        onChange={event => setName(event.target.value)}
        value={name}
        placeholder="Enter your name"
      />

      <input
        type="text"
        name="nickname"
        onChange={event => setNickname(event.target.value)}
        value={nickname}
        placeholder="Enter your nickname"
      />
      <button type="submit">Add new player!</button>
    </form>
  )
}