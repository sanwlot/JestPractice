export default function capitalize(str) {
  const firstChar = str.charAt(0).toUpperCase()
  const restStr = str.slice(1)
  const capitalizedStr = firstChar + restStr
  return capitalizedStr
}
