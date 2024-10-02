import capitalize from "../src/capitalize"

test("capitalize the String", () => {
  expect(capitalize("sylvia")).toBe("Sylvia")
  expect(capitalize("ajay")).toBe("Ajay")
})
