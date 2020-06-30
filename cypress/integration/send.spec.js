describe("Send Test", () => {
  it("Send", () => {
    cy.visit("http://localhost:3000/dashboard");
    cy.get("[data-cy=send-button]").click();
    cy.url().should("include", "/send");
    cy.get("h1").should("contain", "Transfer Details");
    cy.get("[data-cy=next-button]").click();
    cy.get("h1").should("contain", "Payment Method");
    cy.get("[data-cy=next-button]").click();
    cy.get("h1").should("contain", "Instructions");
    cy.get("[data-cy=next-button]").click();
    cy.get("h1").should("contain", "Complete");
    cy.get("[data-cy=return-button]").click();
    cy.url().should("eq", "http://localhost:3000/dashboard");
  });
});
