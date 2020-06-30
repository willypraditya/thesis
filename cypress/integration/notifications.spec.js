describe("Notifications Test", () => {
  it("Notifications", () => {
    cy.visit("http://localhost:3000/dashboard");
    cy.get("[data-cy=notifications-button]").click();
    cy.get("[data-cy=view-notifications-button]").click();
    cy.url().should("include", "/notifications");
  });
});
