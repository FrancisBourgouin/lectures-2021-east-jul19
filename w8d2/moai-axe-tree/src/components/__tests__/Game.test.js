import { render, fireEvent } from '@testing-library/react'
import Game from '../Game'

describe("Game component running through a round", () => {
  it("should let the computer win if cheating mode is true", () => {
    const { getByText, getByTestId } = render(<Game />)

    const moaiButton = getByTestId("moai")

    fireEvent.click(moaiButton)

    const resultMessage = getByText("skynet has risen")

    expect(resultMessage).toBeInTheDocument()

  })
  it("should have a different message if cheating mode is false", () => {
    const { queryByText, getByTestId } = render(<Game />)

    const robotFace = queryByText("🤖")

    fireEvent.click(robotFace)


    expect(robotFace).not.toHaveClass("cheating")

    const moaiButton = getByTestId("moai")

    fireEvent.click(moaiButton)

    const resultMessage = queryByText("Waiting for your choice !")

    expect(resultMessage).not.toBeInTheDocument()

  })
})