import convert from "./"

describe("Convert text to JSON", () => {
  test("It should return the value", () => {
    expect(convert("a")).toBe("a")
  })
  test("It should return an object", () => {
    expect(
      convert(`
a
  b`),
    ).toEqual({ a: "b" })
  })
})
