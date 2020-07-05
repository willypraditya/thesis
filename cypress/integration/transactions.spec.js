describe("Transactions Page Test", () => {
  it("View Transactions", () => {
    cy.visit("http://localhost:3000/dashboard/transactions");
    cy.get("h1").should("contain", "Transaction History");
  });

  it("View Transactions Details", () => {
    cy.visit(
      "http://localhost:3000/dashboard/transactions/a8947283-efbe-487f-aa21-8ee7954042ca"
    );
    cy.get("h1").should("contain", "ID a8947283-efbe-487f-aa21-8ee7954042ca");
  });
});
