import { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Weather from './components/Weather';
import axios from 'axios'

function App() {


  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios
      .get("/api/todos")
      .then(res => {
        setTodos(res.data)
      })
  }, [])


  const addTodo = (name) => {
    const newTodo = {
      id: todos.length + 1,
      name: name,
      completed: false
    }

    const newTodoList = [...todos, newTodo]

    axios
      .post("/api/todos", { todo: newTodo })
      .then(res => {
        setTodos(newTodoList)
      })
  }

  const updateTodo = (id) => {
    const todoToChange = todos.find(todo => todo.id === id)
    const todoToChangeIndex = todos.findIndex(todo => todo.id === id)

    const updatedTodo = { ...todoToChange }
    updatedTodo.completed = !updatedTodo.completed

    const newTodoList = [...todos]
    newTodoList[todoToChangeIndex] = updatedTodo

    setTodos(newTodoList)


  }

  const deleteTodo = (id) => {
    const newTodoList = todos.filter(todo => todo.id !== id)

    setTodos(newTodoList)
  }

  return (
    <div className="App">
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      <TodoForm addTodo={addTodo} />
      <Weather />
    </div>
  );
}

export default App;
