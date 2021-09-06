// # Component Structure

// - App
//   - TodoList
//     - TodoListItem
//   - TodoForm
//   - Weather


const Weather = props => {
  console.log(`I am weather and my props are ${JSON.stringify(props)}`)
}
const TodoForm = props => {
  console.log(`I am TodoForm and my props are ${JSON.stringify(props)}`)
}
const TodoListItem = props => {
  console.log(`I am TodoListItem and my props are ${JSON.stringify(props)}`)

  const todos = []
}
const TodoList = props => {
  console.log(`I am TodoList and my props are ${JSON.stringify(props)}`)

  const todos = [
    {
      id: "1",
      name: "Complete the todo",
      completed: false
    },
    {
      id: "2",
      name: "Make a bad joke",
      completed: true
    },
  ]
}



const App = props => {
  console.log(`I am App`)



  const weatherData = {
    temp: 20,
    condition: "rainy with a chance of meatballs"
  }

  TodoList({ todos })
  TodoForm()
  Weather({ weatherData })
}

// App()
//   < App />


// const renderTweet = () => {

// }

// const listAllTweets = () => {
//   for (const bob of "potato") {
//     renderTweet(bob)
//   }
// }


const potato = () => {

  return 1, 2, 3, 4 // Nope!
}