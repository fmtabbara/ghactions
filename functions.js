export const map = (arr, cb) => {
  const mapped = []
  for (let i = 0; i < arr.length; i++) {
    mapped.push(cb(arr[i]))
  }
  return mapped
}

export const reverseString = (str) => str.split('').reverse().join('')
