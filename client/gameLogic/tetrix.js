import { flatten } from 'lodash'
import { createArray, identity } from '../utils'
import { BOARD_HEIGHT, BOARD_WIDTH } from './constants'

export default function tetrix (inputShape, { invert } = {}) {
  const fullShape = getFullShape(inputShape)
  const shape = invert ? flipVertical(fullShape) : fullShape

  const api = (y, x) => x !== undefined ? api.raw()[y][x] : api.raw()[y]

  api.visual = () => flipVertical(api.raw())

  api.raw = () => shape.map(row => row.slice(0))

  api.clone = () => tetrix(api.raw())
  api.map = fn => tetrix(loopAll(shape, 'map')(fn))
  api.some = loopAll(shape, 'some')
  api.every = loopAll(shape, 'every')
  api.filterRows = fn => tetrix(shape.filter(fn))

  return api
}

function loopAll (shape, method) {
  return fn => shape[method]((row, y) => {
    return row[method]((v, x) => {
      return fn(v, {x, y})
    })
  })
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
