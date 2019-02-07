import convert from "./"

describe("Convert text to JSON", () => {
  test("It should return the value", () => {
    expect(convert("a")).toBe("a")
  })
  test("It should return an object", () => {
    expect(
      convert(`
a
  b
  `),
    ).toEqual({ a: "b" })
  })
  test("It should return an array", () => {
    expect(
      convert(`
a

b
`),
    ).toEqual(["a", "b"])
  })
  test("It should return an nested object", () => {
    expect(
      convert(`
a
  b
    c
`),
    ).toEqual({ a: { b: "c" } })
  })
  test("It should interpret a nested array as an object", () => {
    expect(
      convert(`
a

  b
  `),
    ).toEqual({ a: "b" })
  })
  test("It should interpret an array of objects as a single object", () => {
    expect(
      convert(`
a
  b

c
  d
  `),
    ).toEqual({ a: "b", c: "d" })
  })
})
