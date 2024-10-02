import calculator from "../src/calculator"

describe("Calculator", () => {
  test("adds two numbers", () => {
    expect(calculator.add(1, 2)).toBe(3)
    expect(calculator.add(-10, -32)).toBe(-42)
  })
  test("subtracts two numbers", () => {
    expect(calculator.subtract(4, 2)).toBe(2)
    expect(calculator.subtract(0, 5)).toBe(-5)
  })
  test("multiplies two numbers", () => {
    expect(calculator.multiply(4, 3)).toBe(12)
    expect(calculator.multiply(-1, 5)).toBe(-5)
  })
  test("divides two numbers", () => {
    expect(calculator.divide(10, 2)).toBe(5)
    expect(calculator.divide(9, 3)).toBe(3)
  })
  test("throws error when dividing by zero", () => {
    expect(() => calculator.divide(4, 0)).toThrow("Can't divide by zero!")
  })
})
