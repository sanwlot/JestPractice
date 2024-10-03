export function caesarCipher(str, shift) {
  const shiftedAlphabet = getShiftedAlphabet(shift)
  const alphabetObj = getAlphabetObj(shiftedAlphabet)
  const result = getCipherStr(str, alphabetObj)
  return result
}
function getAlphabetObj(shiftedAlphabet) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  const obj = {}
  for (let i = 0; i < shiftedAlphabet.length; i++) {
    obj[alphabet[i]] = shiftedAlphabet[i]
  }
  return obj
}
function getCipherStr(str, alphabetObj) {
  const punctuation = [" ", ",", "?", "!", "."]
  let result = ""
  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    if (punctuation.includes(char)) {
      const nextPunctuation = punctuation.find((item) => item === char)
      result += nextPunctuation
      continue
    }
    if (char === char.toUpperCase()) {
      result += alphabetObj[char.toLowerCase()].toUpperCase()
    } else {
      result += alphabetObj[char]
    }
  }
  return result
}
function getShiftedAlphabet(shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  const remainingLetters = alphabet.splice(0, shift)
  return [...alphabet, ...remainingLetters]
}
