import "cypress-iframe";
import whyUsSection from "../PageObjects/WhyUs.section";
import homeSection from "../PageObjects/Home.section";
import howItWorkssection from "../PageObjects/HowItWorks.section";
import faqSection from "../PageObjects/FAQ.section";
import chatSection from "../PageObjects/Chat";
import data from "../../fixtures/data.json";

const getIframeBody = (selector) => {
  return cy
    .get(selector)
    .its("0.contentDocument.body")
    .should("not.be.empty")
    .then(cy.wrap);
};

describe("Main testSuite", () => {
  beforeEach(() => {
    cy.visit(data.baseUrl);
  });

  it("Home Section Test", () => {
    homeSection.marketBanner().should("be.visible");
    homeSection.titleBlock().should("be.visible");
    homeSection
      .titleBlock()
      .should(
        "have.text",
        "Join our free internship and access trading capital"
      );
    homeSection.block1().should("be.visible");
    homeSection.block1().should("contain.text", "Funded capital");
  });

  it("How It Works Section Test", () => {
    howItWorkssection.howitworksTitleBlock().should("be.visible");
    howItWorkssection
      .howitworksTitleBlock()
      .should("have.text", "Prove. Trade. Earn.");
    howItWorkssection.block1().should("be.visible");
    howItWorkssection.block1().should("contains.text", "Step 1");
    howItWorkssection.block1().should("contains.text", "Step 2");
    howItWorkssection.block1().should("contains.text", "Step 3");
  });

  it("FAQ Section Test", () => {
    faqSection.faqTitleBlock().should("be.visible");
    faqSection
      .faqTitleBlock()
      .should("have.text", "Frequently asked questions");
    faqSection.faqQuestion1().should("be.visible");
    faqSection.faqQuestion1().should("have.text", "How do I get started?");
  });

  it("Chat Section Test", () => {
    cy.get('.intercom-lightweight-app-launcher').should('be.visible').click();
    cy.wait(5000);
    cy.get('iframe').should('exist').then($iframes => {
      const iframe = Array.from($iframes).find(i => i.contentDocument?.body?.querySelector('button.intercom-fvqzrb.e4hvvep2'));
      expect(iframe).to.exist;
      cy.wrap(iframe.contentDocument.body)
        .find('button.intercom-fvqzrb.e4hvvep2')
        .should('be.visible')
        .contains('Search for help')
        .click();
    });
  });
});
