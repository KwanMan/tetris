import { createStore } from 'redux'

import board from './board'
import * as tetriminos from './tetriminos'

export default function createRedux () {
  return createStore(reducer, {
    board: board(),
    liveTetrimino: false,
    score: 0
  })
}

function reducer (prevState = {}, action) {
  return Object.assign({}, prevState, director(prevState, action))
}

function director (prevState = {}, action) {
  if (prevState.finished) return
  switch (action.type) {
    case 'NEXT_TICK':
      if (prevState.liveTetrimino) {
        return tryDown(prevState)
      } else {
        return introduceNewTetrimino(prevState)
      }
    case 'USER_ACTION':
      if (!prevState.liveTetrimino) return
      switch (action.action) {
        case 'LEFT': return tryLeft(prevState)
        case 'RIGHT': return tryRight(prevState)
        case 'DOWN': return tryDown(prevState)
        case 'DROP': return tryDrop(prevState)
      }
  }
}

function tryLeft ({ board, liveTetrimino }) {
  const next = liveTetrimino.left()
  if (liveTetrimino.atLeft() || board.clashesWith(next)) return
  return { liveTetrimino: next }
}

function tryRight ({ board, liveTetrimino }) {
  const next = liveTetrimino.right()
  if (liveTetrimino.atRight() || board.clashesWith(next)) return
  return { liveTetrimino: next }
}

function tryDown ({ board, liveTetrimino }) {
  const next = liveTetrimino.down()
  if (liveTetrimino.atBottom() || board.clashesWith(next)) {
    return {
      board: board.add(liveTetrimino),
      liveTetrimino: false
    }
  }
  return { liveTetrimino: next }
}

function tryDrop (prevState) {
  let next = prevState
  do {
    next = Object.assign({}, prevState, tryDown(next))
  } while (next.liveTetrimino)
  return next
}

function introduceNewTetrimino ({ board }) {
  const newTetrimino = tetriminos.getRandom()
  if (board.clashesWith(newTetrimino)) {
    console.log('YOU LOST')
    return {
      finished: true
    }
  }
  return {
    liveTetrimino: newTetrimino
  }
}
