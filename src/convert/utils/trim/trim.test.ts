import trim from "./trim"

describe("It should trim leading and trailing empty lines", () => {
  test("should remove multiple empty lines", () => {
    expect(
      trim(`

a

`),
    ).toBe("a")
  })
})
