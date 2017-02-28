import { BOARD_HEIGHT, BOARD_WIDTH } from './constants'
import { identity } from '../utils'
import tetrix from './tetrix'

export function atBottom (tetrix) {
  return tetrix(0).some(identity)
}

export function downOne (tetrix) {
  if (atBottom(tetrix)) {
    throw new Error('Cannot drop any further')
  }
  return tetrix.filterRows((r, i) => i !== 0)
}

export function atLeft (tetrix) {
  return tetrix.some((c, {x, y}) => x === 0 && c)
}

export function leftOne (tetrix) {
  return tetrix.map((c, {x, y}) => {
    if (x === BOARD_WIDTH - 1) return false
    return tetrix(y, x + 1)
  })
}

export function atRight (tetrix) {
  return tetrix.some((c, {x, y}) => x === BOARD_WIDTH - 1 && c)
}

export function rightOne (tetrix) {
  return tetrix.map((c, {x, y}) => {
    if (x === 0) return false
    return tetrix(y, x - 1)
  })
}

export function collides (tetrices) {
  return some(tetrices, (values) => values.filter(identity).length > 1)
}

export function add (tetrices) {
  return map(tetrices, colours => {
    return colours.reduce((memo, nextColour) => {
      if (memo && nextColour) throw new Error('Tetrices collide!')
      return memo || nextColour
    }, false)
  })
}

export function removeCompleted (tetrixBoard) {
  const newShape = tetrixBoard.raw().filter(row => !row.every(identity))
  return {
    removed: BOARD_HEIGHT - newShape.length,
    newTetrix: tetrix(newShape)
  }
}

export function map (tetrices, fn) {
  return tetrices[0].map((foo, {x, y}) => {
    return fn(tetrices.map(t => t(y, x)))
  })
}

export function some (tetrices, fn) {
  return tetrices[0].some((foo, {x, y}) => {
    return fn(tetrices.map(t => t(y, x)))
  })
}
