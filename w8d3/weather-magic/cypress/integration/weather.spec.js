
describe("User should fetch the weather for a specific city", () => {
  it("loads the page with no weather data", () => {
    cy.visit("/")
  })
  it("should be able to accept a city name in the input", () => {
    cy.get('input').should("have.value", "")
    cy.get('input').type("Toronto")
    cy.get('input').should("have.value", "Toronto")
  })
  it("should show the weather for Toronto when submitting the form", () => {
    cy.get('input').type("{enter}")
    // or
    // cy.get('form button').click()

    cy.get('.App > div > h1').should("have.text", "Current weather for Toronto")
  })
})

describe("User should be able to create a button for a city that they searched for", () => {
  it("loads the page with no weather data", () => {
    cy.visit("/")
  })
  it("should be able to accept a city name in the input", () => {
    cy.get('input').should("have.value", "")
    cy.get('input').type("Toronto")
    cy.get('input').should("have.value", "Toronto")
  })
  it("should add the Toronto button when user submits", () => {
    cy.get('input').type("{enter}")
    cy.get("button#Toronto").should("be.visible")
  })
  it("should be able to add a Montréal button by using the input", () => {
    cy.get('input').should("have.value", "")
    cy.get('input').type("Montréal")
    cy.get('input').should("have.value", "Montréal")
  })
  it("should add the Toronto button when user submits", () => {
    cy.get('input').type("{enter}")
    cy.get("button#Montréal").should("be.visible")
  })
  it("should not add a button for a city that already exists", () => {
    cy.get('input').should("have.value", "")
    cy.get('input').type("Toronto")
    cy.get('input').should("have.value", "Toronto")
    cy.get('input').type("{enter}")
    cy.get("button#Toronto").should("have.length", 1)
  })
})

describe("User should be able to click on a button to see weather for that city", () => {
  before(() => {
    cy.visit("/")
    cy.get('input').type("Toronto{enter}")
    cy.get('input').type("Montréal{enter}")
  })
  it("should show the weather for Montréal", () => {
    cy.get('.App > div > h1').should("have.text", "Current weather for Montréal")
  })
  it("should show the weather for Toronto when clicking on the Toronto button", () => {
    cy.get("button#Toronto").click()
    cy.get('.App > div > h1').should("have.text", "Current weather for Toronto")

  })
})