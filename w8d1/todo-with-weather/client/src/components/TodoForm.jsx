import { useState } from "react"

export default function TodoForm(props) {
  const { addTodo } = props

  const [name, setName] = useState("")

  const handleChange = event => {
    setName(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    addTodo(name)
    setName("")
  }
  return (
    <section>
      <h1>Todo Form!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter the todo description"
          value={name}
          onChange={handleChange}
        />
        <button type="submit">Add Todo</button>
      </form>
    </section>
  )
}