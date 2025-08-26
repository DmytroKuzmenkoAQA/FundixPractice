class ChatSection {
  openChatButton() {
    return cy.get('[class="intercom-lightweight-app-launcher-icon intercom-lightweight-app-launcher-icon-open"]')
  }
  chatText() {
    return cy.get('[class="intercom-1xdhyk6 e1xqkdfq2"]')
  }
  whatisFundixPage() {
    return cy.get('[class="intercom-interblocks-paragraph no-margin intercom-interblocks-align-left"]')
  }
}

export default new ChatSection()
