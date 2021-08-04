const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const { authenticateUser, createNewUser, findUser } = require("./helpers/authenticationHelpers")
const app = express();
const port = 3000;

app.use(cookieParser())
app.use(express.static("public")); // Static files (css / images)
app.use(bodyParser.urlencoded({ extended: false }));// Parses the body of a form request string in an object

app.set("view engine", "ejs"); //


const userDatabase = {
  "gentleman@cambrioleur.com": {
    email: "gentleman@cambrioleur.com",
    name: "Arsène Lupin",
    password: "paris",
    avatar: "🎩"
  },
  "pontiac@bandit.com": {
    email: "pontiac@bandit.com",
    name: "Doug Judy",
    password: "Rosa",
    avatar: "🚗"
  }
}

// - / (GET) - Show the homepage
app.get("/", (req, res) => {
  console.log(req.cookies)

  const user = findUser(userDatabase, req.cookies.email)

  const templateVars = {
    name: user.name,
    email: user.email,
    avatar: user.avatar
  }

  res.render("index", templateVars);
});

// - /login (POST) - Receive login info, validate and then do an action based on it


app.post("/login", (req, res) => {
  // req.body
  // {
  //   email:"pock@pock.com",
  //   password:"omelette"
  // }

  // const email = req.body.email
  // const password = req.body.password

  const { email, password } = req.body

  const user = authenticateUser(userDatabase, email, password)

  if (user) {
    res.cookie("email", user.email)
  }

  res.redirect("/")
})

// Route to logout the user
app.post("/logout", (req, res) => {
  // Clear the cookie called email
  res.clearCookie("email")
  // Redirect back to the home page
  res.redirect("/")
})

// - /register (GET) - Show the register form page
app.get("/register", (req, res) => {
  const user = userDatabase[req.cookies.email]

  const templateVars = {
    name: user ? user.name : ""
  }

  res.render("register", templateVars)
})

// - /register (POST) - Create user with form information
app.post("/register", (req, res) => {

  const userObject = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    avatar: req.body.avatar
  }

  const user = createNewUser(userDatabase, userObject)
  if (user) {
    res.cookie("email", user.email)

    return res.redirect("/")
  }

  res.redirect("/register")

})


app.listen(port, () => console.log(`Express server running on port ${port}`));
