/* globals cy */

describe("Test App", () => {
	it("launches", () => {
		cy.visit("/");
	});
	it("opens with Fall CS courses", () => {
		cy.visit("/");
		cy.get("#Fall").should("be.checked");
		cy.get("[data-cy=course]").should("contain", "Fall");
	});
	it("shows Winter courses when Winter is selected", () => {
		cy.visit("/");
		cy.get("label[for='Winter']").click();
		cy.get("[data-cy=course]").should("contain", "Winter");
	});
});
