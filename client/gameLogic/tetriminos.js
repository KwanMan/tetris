import tetrix from './tetrix'
import { pickRandom } from '../utils'

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
  return tetrix(shape, true).map(v => v ? colour : false)
}
