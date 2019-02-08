describe("NNS Editor", () => {
  it("should go to page with forms", () => {
    cy.visit("http://localhost:1234")
  })
  it("should get the elements", () => {
    cy.get("textarea")
    cy.get('input[type="submit"')
    cy.get("textarea[readonly]")
  })
  it("should erase placeholder value", () => {
    cy.get("textarea")
      .first()
      .invoke("val", "")
      .should("have.value", "")
  })
  it("should type in text", () => {
    cy.get("textarea")
      .first()
      .type("hello")
      .should("have.value", "hello")
  })
  // {tab} not supported yet
  // it("should insert indentation", () => {
  //   cy.get("textarea")
  //     .first()
  //     .type("{enter}{tab}world{enter}✔")
  //     .should("have.value", "hello\n\tworld\n\t✔")
  // })
})
