describe("purchase", () => {
  it("msf", function () {
    let successTitle = "Payment successful...";
    cy.viewport(1280, 768);
    cy.visit("https://storedev-c.startrekfleetcommand.com/");
    cy.title().should("eq", "STAR TREK Fleet Command");
    cy.get("#log-in-button").click();
    //cy.wait(5000);
    cy.get("#input28").type("ani.harutyunyan@inomma.com");
    cy.get("#input36").type("602686a_A{enter}");
    //cy.wait(10000);
    cy.get("#navigation-item-to-store").click();
    cy.get('[data-testid="button-309063986"]').click();
    cy.wait(7000);
    cy.getIframe("#xsolla-lightbox-iframe").find("div[title='PayPal']").click();
    cy.wait(4000);
    cy.getIframe("#xsolla-lightbox-iframe")
      .find(".form-navigation-submit")
      .click();
    cy.getIframe("#xsolla-lightbox-iframe")
      .find(".form-navigation-submit")
      .click();
    cy.wait(4000);
    cy.getIframe("#xsolla-lightbox-iframe").find(".header-info-close").click();
    //cy.wait(3000);
    cy.get("h2:contains('Payment successful...')").should(
      "have.text",
      "Payment successful..."
    );
    cy.get("#modal-close-button").click();
    //cy.wait(4000);
    cy.get('[data-testid="user-data-dropdown"]').click();
    cy.get("#log-out-button").click();
  });
});
