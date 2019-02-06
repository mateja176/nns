import isArray from "./isArray"

describe("It should tell apart arrays from non arrays", () => {
  test("It should detect an array", () => {
    expect(
      isArray(`a

b`),
    ).toBe(true)
  })
  test("It should reject an object containing an array", () => {
    expect(
      isArray(`a
  b

  c`),
    ).toBe(false)
  })
  test("It should detect an array of objects", () => {
    expect(
      isArray(`a
  b

c
  d`),
    ).toBe(true)
  })
  test("It should detect a nested array", () => {
    expect(
      isArray(`a

  b`),
    ).toBe(true)
  })
})
