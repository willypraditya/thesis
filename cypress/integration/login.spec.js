describe("Login Page Test", () => {
  it("Login", () => {
    cy.visit("login");
    cy.get("[data-cy=email-input]").type("w.praditya@yahoo.com");
    cy.get("[data-cy=pin-input]").type("12345678");
    cy.get("[data-cy=login-button]").click();
  });

  it("Verify OTP", () => {
    cy.get("[data-cy=otp-input]").type("260698");
    cy.get("[data-cy=verify-otp-button]").click();
    cy.url().should("include", "/dashboard");
  });
});
