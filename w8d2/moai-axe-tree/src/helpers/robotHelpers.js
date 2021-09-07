// If computer is on, choose the perfect opposite for an item
export const pickOppositeChoice = (playerChoice) => {
  // switch (playerChoice) {
  //   case "🌳":
  //     return "🪓"
  //   case "🪓":
  //     return "🗿"
  //   case "🗿":
  //     return "🌳"
  // }

  // if(playerChoice === "🌳"){
  //   return "🪓"
  // }

  const matcher = {
    "🌳": "🪓",
    "🪓": "🗿",
    "🗿": "🌳"
  }

  return matcher[playerChoice] || null
}

// If computer is off, choose randomly
export const pickRandomly = (playerChoice) => {
  const randomIndex = Math.floor(Math.random() * 3)
  const listOfChoices = ["🪓", "🌳", "🗿"]
  const isValidChoice = listOfChoices.includes(playerChoice)

  return isValidChoice ? listOfChoices[randomIndex] : null;
}