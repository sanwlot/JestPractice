import { caesarCipher } from "../src/caesarCipher"

describe("Caesar Cipher", () => {
  test("simple cases", () => {
    expect(caesarCipher("ajay", 1)).toBe("bkbz")
    expect(caesarCipher("ajay", 2)).toBe("clca")
    expect(caesarCipher("xyz", 3)).toBe("abc")
  })
  test("case preservation", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr")
  })
  test("punctuation should be unchanged", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!")
  })
})
