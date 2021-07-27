// Callbacks

const printToConsole = (value) => console.log(value)

const potatoes = ["Russett", "Yukon gold"]

const listElementsAndDoSomething = (list, action) => {
  for (const element of list) {
    action(element)
  }
}

listElements(potatoes, printToConsole)
// printToConsole is the callback fct of listElements

listElements(potatoes, (value) => console.log(value))
// (value) => console.log(value) is an anonymous function


const tooChillParents = () => true

const strictParents = (grade, subject) => {
  if (subject === "Maths") {
    return grade > 95
  } else {
    return grade > 100
  }
}


const judgeAGrade = (grade, subject, conditionCallback) => {
  if (conditionCallback(grade, subject)) {
    console.log("Good job.")
  } else {
    console.log("Son, I am disapoint")
  }
}

judgeAGrade(90, 'french', strictParents)
judgeAGrade(90, 'french', tooChillParents)

[1, 2, 3].forEach((element, index, array) => console.log(element))


const addNumbers = (num1, num2, isFancy) => {
  if (isFancy) {
    return console.log("❤" + num1 + num2)
    // And that's it for this function
  }
  return console.log(num1 + num2)
  // And that's it for this function

}

addNumbers(2, 2)
addNumbers(2, 2, true)
// HOF

// Judge a grade
// Input : 
// grade : number
// subject : string
// conditionCallback : function
//  Input 
//    grade : number
//    subject : string
//  Output
//    Boolean (true/false)
// Output :
// Message : string

const judgeAGrade = (grade, subject, callback) => {
  // Return a specific message depending on the result of the callback
  if (callback(grade, subject)) {
    return "good job"
  }
  return "bad job"
}


const log = callback => console.log(callback())

log(judgeAGrade(90, "maths", tooChillParents))

[1, 2, 3].forEach(element => element * 2)