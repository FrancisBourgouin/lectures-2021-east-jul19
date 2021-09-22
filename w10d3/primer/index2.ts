
const roundANumberButBetter = (number: number, roundness: number) => {
  const factor = 10 ** roundness

  return Math.round(number * factor) / factor
}

let chicken: string = "🐣"
chicken = "🐔"
// chicken = 0


roundANumberButBetter(3.444, 3)
console.log(roundANumberButBetter(3.14159265358979323846, 4))
// console.log(roundANumberButBetter("🐔🐔🐔", 4))

const listOfThings: number[] = [1,2,3,4,5]

// listOfThings.push("hello")

interface User{
  name:string,
  email:string,
  random:any,
  dob: Date
}

const someUser: User = {
  name:"Bob",
  email:"rob@ert.com",
  random:[1,2,3,4],
  dob: new Date()
}


const readEmailFromUsers = () => {
  const bob: any = {...someUser}
  bob.email = 5
}

enum stateReducerActions {
  SET_APPLICATION_DATA = 0,
  SET_DAY,
}

enum movement {
  UP = 0,
  DOWN,
  LEFT,
  RIGHT
}