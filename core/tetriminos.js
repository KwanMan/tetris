import tetrix from './tetrix'
import { pickRandom } from '../utils'
import { BOARD_HEIGHT, BOARD_WIDTH } from './constants'

const TETRIMINOS = [
  // I
  [[-1, 0], [0, 0], [1, 0], [2, 0]],
  // L
  [[-1, 0], [0, 0], [1, 0], [1, 1]],
  // J
  [[-1, 1], [-1, 0], [0, 0], [1, 0]],
  // S
  [[-1, 0], [0, 0], [0, 1], [1, 1]],
  // Z
  [[-1, 1], [0, 1], [0, 0], [1, 0]],
  // O
  [[0, 1], [1, 1], [0, 0], [1, 0]],
  // T
  [[-1, 0], [0, 0], [1, 0], [0, 1]]
]

const COLOURS = ['blue', 'red', 'yellow', 'green', 'orange', 'grey', 'pink']

const location = [Math.floor(BOARD_WIDTH / 2), BOARD_HEIGHT - 1]

export function getRandom () {
  const coords = pickRandom(TETRIMINOS)
  const colour = pickRandom(COLOURS)
  return tetrix(coords, location, colour)
}
