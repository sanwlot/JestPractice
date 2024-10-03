export function analyzeArray(arr) {
  const length = arr.length
  const average = arr.reduce((acc, curr) => acc + curr, 0) / length
  let min = arr[0]
  let max = arr[0]

  arr.forEach((num) => {
    if (num > max) max = num
    if (num < min) min = num
  })
  return { length: length, average: average, min, max }
}
