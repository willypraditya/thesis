describe("Top-Up Test", () => {
  it("Top-Up", () => {
    cy.visit("http://localhost:3000/dashboard");
    cy.get("[data-cy=top-up-button]").click();
    cy.url().should("include", "/top-up");
    cy.get("h1").should("contain", "Bank Selection & Amount");
    cy.get("[data-cy=next-button]").click();
    cy.get("h1").should("contain", "Instructions");
    cy.get("[data-cy=next-button]").click();
    cy.get("h1").should("contain", "Complete");
    cy.get("[data-cy=return-button]").click();
    cy.url().should("eq", "http://localhost:3000/dashboard");
  });
});
