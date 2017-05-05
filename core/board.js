import { BOARD_WIDTH, BOARD_HEIGHT } from './constants'

export default function board (grid = {}) {
  return {
    get (x, y) {
      return grid[id([x, y])]
    },
    add (tetrix) {
      return board(Object.assign({}, grid, toGrid(tetrix)))
    },
    clashesWith (tetrix) {
      return tetrix.getCoords().some((coords) => grid[id(coords)])
    },
    getVisual () {
      const output = []
      for (let y = 0; y < BOARD_HEIGHT; y++) {
        output.push([])
        for (let x = 0; x < BOARD_WIDTH; x++) {
          output[y].push(grid[id([x, BOARD_HEIGHT - y - 1])])
        }
      }
      return output
    }
  }
}

function toGrid (tetrix) {
  const colour = tetrix.getColour()
  return tetrix.getCoords().reduce((memo, coords) => {
    memo[id(coords)] = colour
    return memo
  }, {})
}

function id ([x, y]) {
  return `${x},${y}`
}
