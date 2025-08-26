class FAQSection {
  faqTitleBlock() {
    return cy.get('[class="sc-1ae36635-0 jeRRKs"] [class="sc-2cbc0cb3-7 jYZVeF"]')
  }
  faqQuestion1() {
    return cy.get('[class="sc-1ae36635-0 jeRRKs"] [class="sc-2cbc0cb3-9 dARLep"]').first()
  }
}

export default new FAQSection()
