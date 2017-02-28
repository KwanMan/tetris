import { flatten } from 'lodash'
import { createArray, identity } from '../utils'
import { BOARD_HEIGHT, BOARD_WIDTH } from './constants'

export default function tetrix (inputShape, invert) {
  const shape = invert
    ? flipVertical(getFullShape(centre(inputShape)))
    : getFullShape(centre(inputShape))

  const api = (y, x) => x !== undefined ? api.raw()[y][x] : api.raw()[y]

  api.visual = () => flipVertical(api.raw())

  api.raw = () => shape.map(row => row.slice(0))

  api.clone = () => tetrix(api.raw())
  api.map = fn => tetrix(shape.map((row, y) => row.map((v, x) => fn(v, {x, y}))))
  api.some = fn => shape.some((row, y) => row.some((v, x) => fn(v, {x, y})))
  api.filterRows = fn => tetrix(shape.filter(fn))

  api.scrub = (yTarget, xTarget) => api.map((value, {x, y}) => {
    const match = yTarget === y && xTarget === x
    return match ? false : value
  })

  api.isEmpty = () => !api.some(identity)

  return api
}

function getFullShape (shape) {
  let full = shape.slice(0)
  while (full.length !== BOARD_HEIGHT) {
    full.push(createArray(false, BOARD_WIDTH))
  }
  return full
}

function flipVertical (input) {
  return input.reduce((memo, next) => {
    memo.unshift(next)
    return memo
  }, [])
}

function centre (input) {
  if (!input[0]) return input
  const width = input[0].length
  const left = Math.floor((BOARD_WIDTH - width) / 2)
  const right = Math.ceil((BOARD_WIDTH - width) / 2)
  return input.map(r => {
    return flatten([createArray(false, left), r, createArray(false, right)])
  })
}
