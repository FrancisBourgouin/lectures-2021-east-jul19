import TodoListItem from "./TodoListItem";

export default function TodoList(props) {
  const { todos, updateTodo, deleteTodo } = props
  const { id, name, completed } = todos[0] ? todos[0] : {};

  const parsedTodos = todos.map(todo =>
    <TodoListItem key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
  )
  // const parsedTodos = todos.map(todo => <TodoListItem id={todo.id} name={todo.name} completed={todo.completed}/>)

  return (
    <ul>
      {parsedTodos}
    </ul>
  )
}