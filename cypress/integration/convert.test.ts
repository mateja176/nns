describe("It should convert text to JSON", () => {
  it("should convert basic example", () => {
    cy.visit("http://localhost:1234")

    cy.get('input[type="submit"]').click()

    cy.get("textarea[readonly]")
      .invoke("val")
      .then(val => {
        // @ts-ignore
        expect(JSON.parse(val)).to.deep.equal({
          Hello: "World!",
          How: ["are", "you?"],
        })
      })
  })
})
