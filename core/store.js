import { createStore } from 'redux'

import tetrix from './tetrix'
import * as tetriminos from './tetriminos'
import { updateScore } from './scoring'
import {
  atLeft,
  atRight,
  atBottom,
  leftOne,
  rightOne,
  downOne,
  collides,
  add,
  removeCompleted
} from './tetrixUtils'

export default function createRedux () {
  return createStore(reducer, {
    board: tetrix([]),
    score: 0
  })
}

function reducer (prevState = {}, action) {
  const nextState = Object.assign({}, prevState, director(prevState, action))
  return checkCompleted(nextState)
}

function checkCompleted (prevState) {
  const { newTetrix, removed } = removeCompleted(prevState.board)
  return Object.assign({}, prevState, {
    board: newTetrix,
    score: updateScore(prevState.score, removed)
  })
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

function tryLeft ({ liveTetrimino, board }) {
  if (atLeft(liveTetrimino) || collides([board, leftOne(liveTetrimino)])) return
  return { liveTetrimino: leftOne(liveTetrimino) }
}

function tryRight ({ liveTetrimino, board }) {
  if (atRight(liveTetrimino) || collides([board, rightOne(liveTetrimino)])) return
  return { liveTetrimino: rightOne(liveTetrimino) }
}

function tryDown ({ board, liveTetrimino }) {
  if (atBottom(liveTetrimino) || collides([board, downOne(liveTetrimino)])) {
    return {
      board: add([board, liveTetrimino]),
      liveTetrimino: false
    }
  } else {
    return {
      liveTetrimino: downOne(liveTetrimino)
    }
  }
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
  if (collides([board, newTetrimino])) {
    console.log('YOU LOST')
    return {
      finished: true
    }
  }
  return {
    liveTetrimino: newTetrimino
  }
}
