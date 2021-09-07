import { pickOppositeChoice, pickRandomly } from './robotHelpers'

describe("If computer is on, choose the perfect opposite for an item", () => {
  it("should pick the axe if the player picks tree", () => {
    const result = pickOppositeChoice("🌳")

    expect(result).toBe("🪓")
  })
  it("should pick the moai if the player picks axe", () => {
    const result = pickOppositeChoice("🪓")
    expect(result).toBe("🗿")
  })
  it("should pick the tree if the player picks moai", () => {
    const result = pickOppositeChoice("🗿")
    expect(result).toBe("🌳")
  })
  it("should pick the nothing if the player picks something else than (moai / axe / tree)", () => {
    const result = pickOppositeChoice("🦊")
    expect(result).toBeNull()
  })
})

describe("If computer is off, choose randomly", () => {
  it("should return either moai or axe or tree if player picks something", () => {
    const result = pickRandomly("🪓")
    const potentialResults = ["🪓", "🌳", "🗿"]
    const isIncluded = potentialResults.includes(result)

    expect(isIncluded).toBeTruthy()
  })
  it("should return nothing if player picks something else", () => {
    const result = pickRandomly("🙈")
    // const potentialResults = ["🪓", "🌳", "🗿"]
    // const isIncluded = potentialResults.includes(result)

    // expect(isIncluded).toBeFalsy()
    expect(result).toBeNull()
  })
})
