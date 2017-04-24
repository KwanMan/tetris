import { flatten } from 'lodash'

import tetrix from './tetrix'
import { pickRandom, createArray } from '../utils'
import { BOARD_HEIGHT, BOARD_WIDTH } from './constants'

const SHAPES = [
  [[1, 1, 1, 1]],
  [
    [1, 1, 1],
    [0, 0, 1]
  ],
  [
    [1, 1, 1],
    [1, 0, 0]
  ],
  [
    [1, 1, 0],
    [0, 1, 1]
  ],
  [
    [0, 1, 1],
    [1, 1, 0]
  ],
  [
    [1, 1, 1],
    [0, 1, 0]
  ],
  [
    [1, 1],
    [1, 1]
  ]
]

const COLOURS = ['blue', 'red', 'yellow', 'green', 'orange', 'grey', 'pink']

export function getRandom () {
  const shape = pickRandom(SHAPES)
  const colour = pickRandom(COLOURS)
  return tetrix(centre(shape), { invert: true }).map(v => v ? colour : false)
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