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
  test("It should return an nested array", () => {
    expect(
      convert(`
    a
        b
`),
    ).toEqual(["a", ["b"]])
  })
  test("It should return an array of objects", () => {
    expect(
      convert(`
    a
      b
    c
      d
`),
    ).toEqual([{ a: "b" }, { c: "d" }])
  })
})
