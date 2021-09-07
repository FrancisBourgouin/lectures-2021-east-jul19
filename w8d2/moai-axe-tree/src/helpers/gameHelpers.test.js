import { determineWinner, startRound } from './gameHelpers'

// Function to decide the winner
describe("Function to decide the winner", () => {
  it("should return the message 'humans wins, for now.' if player wins", () => {
    const result = determineWinner("🌳", "🗿")

    expect(result).toBe('humans wins, for now.')
  })
  it("should return the message 'skynet has risen' if computer wins", () => {
    const result = determineWinner("🌳", "🪓")

    expect(result).toBe('skynet has risen')
  })
  it("should return the message 'do androids dream of electric sheep?' if a draw", () => {
    const result = determineWinner("🌳", "🌳")
    expect(result).toBe('do androids dream of electric sheep?')
  })

})
// Function to let the computer choose

describe("Function to let the computer choose", () => {
  it("should return an object with {player:'🗿' , computer:'🌳'} if cheating active", () => {
    const result = startRound(true, "🗿")

    expect(result.player).toBe("🗿")
    expect(result.computer).toBe("🌳")
  })
  it("should return an object with {player:'🪓' , computer:'🗿'} if cheating active", () => {
    const result = startRound(true, "🪓")

    expect(result.player).toBe("🪓")
    expect(result.computer).toBe("🗿")
  })
  it("should return an object with {player:'🌳' , computer:'🪓'} if cheating active", () => {
    const result = startRound(true, "🌳")

    expect(result.player).toBe("🌳")
    expect(result.computer).toBe("🪓")
  })
  it("should return an object with {player:'🌳' , computer:'something'} if cheating inactive", () => {
    const result = startRound(false, "🌳")

    expect(result.player).toBe("🌳")

    const isIncluded = ["🪓", "🌳", "🗿"].includes(result.computer)
    expect(isIncluded).toBeTruthy()
  })
})