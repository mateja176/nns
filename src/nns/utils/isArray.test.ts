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
  test("It should detect an array with an object", () => {
    expect(
      isArray(`a
  b

c`),
    ).toBe(true)
  })
})
