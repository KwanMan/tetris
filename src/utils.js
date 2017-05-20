export const identity = val => val

export function createArray (value, length) {
  const out = []
  while (out.length !== length) {
    out.push(value)
  }
  return out
}

export function pickRandom (array) {
  const int = Math.floor(Math.random() * array.length)
  return array[int]
}

export function once (fn, message) {
  let called = false
  return (...args) => {
    if (called) throw new Error(message)
    called = true
    return fn(...args)
  }
}
