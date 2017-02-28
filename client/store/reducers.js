import Immutable from 'immutable'

export default {
  player,
  board
}

function player (state = {}) {
  return state
}

const initialBoard = Immutable.fromJS([
  ['red', 'red', 'red', 'blue', 'blue', 'blue', 'green', 'green', 'green', 'yellow', 'yellow', 'yellow'],
  [null, 'red', null, null, 'blue', null, 'green', null, null, null, null, 'yellow'],
  [null, 'yellow', null, 'red', 'red', 'red', 'blue', null, null, 'red', 'red', 'red'],
  ['yellow', 'yellow', 'yellow', null, 'red', null, 'blue', 'blue', 'blue', null, null, 'red']
])

function board (state = initialBoard) {
  console.log('running board reducer')
  return state
}
