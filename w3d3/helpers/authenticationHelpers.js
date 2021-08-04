const authenticateUser = (userDatabase, email, password) => {
  const user = userDatabase[email]
  if (user) {
    if (user.password === password) {
      console.log("GOOD JOB")
      return user
    }
    console.log("BAD JOB")
    return null

  }
  console.log("WHO ARE YOU")
  return null
}

const createNewUser = (userDatabase, userObject) => {
  if (!userDatabase[userObject.email]) {
    userDatabase[email] = userObject
    return userObject
  }
  return null
}

const findUser = (userDatabase, email) => {
  const user = userDatabase[email] ? userDatabase[email] : {}

  return user
}

module.exports = { authenticateUser, createNewUser, findUser }