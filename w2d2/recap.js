// Functions ?

// Function definition
badFunction()
badFunction

function badFunction() { // HOISTING
  console.log('pouet')
}


// Function declaration

const coolFunction = function () {
  console.log('pouet')
}

coolFunction()
coolFunction


// Function declaration (arrow syntax)

const coolArrowFunction = () => console.log('pouet')

coolArrowFunction()
coolArrowFunction





// Callbacks ? Higher Order Functions

// Special function ? NO

const doSomethingMultipleTimes = (callback, nbOfTimes) => {
  for (let i = 0; i < nbOfTimes; i++) {
    callback()
  }
}

doSomethingMultipleTimes(coolFunction, 10)


// Asynchronous function?