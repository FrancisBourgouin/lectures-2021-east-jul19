var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
const data = {
  todos: [
    {
      id: 1,
      name: "Do the todo, tidlidou",
      completed: false
    },
    {
      id: 2,
      name: "The todo with no name",
      completed: true
    },
    {
      id: 3,
      name: "For a fistfull of todos",
      completed: true
    },
  ]
}


app.get("/api/todos", (req, res) => {
  res.json(data.todos)
})

app.post("/api/todos", (req, res) => {
  const todo = req.body.todo
  data.todos = [...data.todos, todo]

  res.send("OK")
})

module.exports = app;
