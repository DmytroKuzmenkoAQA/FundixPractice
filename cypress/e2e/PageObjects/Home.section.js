class HomeSection {
  marketBanner() {
    return cy.get('[class="sc-16349341-25 LfPic"]')
  }
  titleBlock() {
    return cy.get('[class="sc-2cbc0cb3-6 ggrVSE"]')
  }
  block1() {
    return cy.get('[class="sc-16349341-10 kgbwgg"]')
  }
}

export default new HomeSection()
