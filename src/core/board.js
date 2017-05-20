import { BOARD_WIDTH, BOARD_HEIGHT } from './constants'

export default function board (grid = {}) {
  return {
    get,
    add,
    clashesWith,
    removeCompleted,
    getVisual,
    deleteRow
  }

  function get (x, y) {
    return grid[id([x, y])]
  }

  function add (tetrix) {
    return board(Object.assign({}, grid, toGrid(tetrix)))
  }

  function clashesWith (tetrix) {
    return tetrix.getCoords().some((coords) => grid[id(coords)])
  }

  function removeCompleted () {
    let newBoard = board(Object.assign({}, grid))
    let removed = 0
    forEach(4, count => {
      forEach(BOARD_HEIGHT, y => {
        const full = every(BOARD_WIDTH, x => newBoard.get(x, y))
        if (full) {
          removed++
          newBoard = newBoard.deleteRow(y)
          return false
        }
      })
    })
    return { board: newBoard, removed }
  }

  function getVisual () {
    const output = []
    forEach(BOARD_HEIGHT, y => {
      const row = []
      forEach(BOARD_WIDTH, x => {
        const trueY = BOARD_HEIGHT - y - 1
        row.push(get(x, trueY))
      })
      output.push(row)
    })
    return output
  }

  function deleteRow (yTarget) {
    return board(Object.keys(grid).reduce((memo, key) => {
      const [x, y] = key.split(',').map(i => Number(i))
      if (y === yTarget) return memo
      if (y < yTarget) memo[key] = grid[key]
      if (y > yTarget) memo[id([x, y - 1])] = grid[key]
      return memo
    }, {}))
  }
}

function forEach (limit, fn) {
  for (let i = 0; i < limit; i++) {
    if (fn(i) === false) break
  }
}

function every (limit, fn) {
  for (let i = 0; i < limit; i++) {
    if (!fn(i)) return false
  }
  return true
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
