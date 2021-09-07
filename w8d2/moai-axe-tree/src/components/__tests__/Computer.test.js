import { render } from '@testing-library/react'
import Computer from '../Computer'

describe("Computer components show proper look when cheating or not", () => {
  it("should have the class cheating when the property isCheating is true", () => {
    const { getByText } = render(<Computer isCheating={true} />)

    const element = getByText("🤖")

    expect(element).toHaveClass("cheating")

  })
  it("should not have the class cheating when the property isCheating is false", () => {
    const { getByText } = render(<Computer isCheating={false} />)

    const element = getByText("🤖")

    expect(element).not.toHaveClass("cheating")
  })
})