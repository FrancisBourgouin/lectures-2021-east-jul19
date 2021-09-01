// Immutability

// immutablity > mutability

// Depends ??

let potato = "🥔"
let otherPotato = potato
potato = "🍟"

console.log(potato, otherPotato)


let potatoes = ["🥔"]
let otherPotatoes = potatoes
potatoes[0] = "🍟"

console.log(potatoes, otherPotatoes)


const countdownValues = [5, 4, 3, 2, 1]

// console.log(countdownValues.pop())
// console.log(countdownValues)
// console.log(countdownValues.pop())
// console.log(countdownValues)
// console.log(countdownValues.pop())
// console.log(countdownValues)
// console.log(countdownValues.pop())

// const purePop = (arr) => {
//   // const newArr = []
//   // for (const element of arr) {
//   //   newArr.push(element)
//   // }
//   const newArr = [...arr]
//   return console.log(newArr.pop())
// }

// console.log(countdownValues)

// purePop(countdownValues)

// console.log(countdownValues)


const ninja =
  [
    [""],
    [""]
  ]

const superNinja = [...ninja]

superNinja.push([""])
ninja[0] = [...ninja[0], "🍕"]

console.log(ninja, superNinja)