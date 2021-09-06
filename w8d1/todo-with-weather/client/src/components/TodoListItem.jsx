export default function TodoListItem(props) {

  const id = props.id
  const name = props.name
  const completed = props.completed
  const updateTodo = props.updateTodo
  const deleteTodo = props.deleteTodo

  // const {id, name, completed, updateTodo, deleteTodo} = props

  const deleteThisTodo = () => deleteTodo(id)
  const updateThisTodo = () => updateTodo(id)


  const check = completed ? <i>✅</i> : <i>❌</i>
  return (
    <>
      <li >
        <h1>{name} {check}</h1>
        <button onClick={deleteThisTodo}>🤖 DELETE 🤖</button>
        <button onClick={updateThisTodo}>Change complete status</button>
      </li>
      <hr />
    </>
  )
}