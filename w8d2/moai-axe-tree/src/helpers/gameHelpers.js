import { pickOppositeChoice, pickRandomly } from "./robotHelpers"

// Function to decide the winner
export const determineWinner = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    return 'do androids dream of electric sheep?'
  }
  if (
    (playerChoice === "🪓" && computerChoice === "🌳") ||
    (playerChoice === "🌳" && computerChoice === "🗿") ||
    (playerChoice === "🗿" && computerChoice === "🪓")) {
    return 'humans wins, for now.'
  }
  return 'skynet has risen'
}
// Function to let the computer choose
export const startRound = (computerCheating, playerChoice) => {
  let computerResult

  if (computerCheating) {
    computerResult = pickOppositeChoice(playerChoice)
  } else {
    computerResult = pickRandomly(playerChoice)
  }

  return { computer: computerResult, player: playerChoice }
}
