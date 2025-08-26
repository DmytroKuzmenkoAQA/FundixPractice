class HowItWorksSection {
  howitworksTitleBlock() {
    return cy.get('[id="works"] [class="sc-2cbc0cb3-7 jYZVeF"]')
  }
  block1() {
    return cy.get('[class="sc-7a490e8c-2 cqJaoF"]')
  }
}

export default new HowItWorksSection()
