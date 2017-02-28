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
  return Object.assign({}, prevState, director(prevState, action))
}

function director (prevState = {}, action) {
  if (prevState.lastAction === 'LOST') return
  switch (action.type) {
    case 'NEXT_TICK':
      if (prevState.liveTetrimino) {
        return tryDropping(prevState)
      } else {
        return introduceNewTetrimino(prevState)
      }
    case 'USER_ACTION':
      if (prevState.liveTetrimino) {
        return performAction(prevState, action.action)
      }
  }
}

function performAction (prevState, action) {
  const { liveTetrimino, board } = prevState
  let next
  switch (action) {
    case 'LEFT':
      if (atLeft(liveTetrimino) || collides([board, leftOne(liveTetrimino)])) {
        return
      }
      return { liveTetrimino: leftOne(liveTetrimino) }
    case 'RIGHT':
      if (atRight(liveTetrimino) || collides([board, rightOne(liveTetrimino)])) return
      return { liveTetrimino: rightOne(liveTetrimino) }
  }
}

function tryDropping (prevState) {
  const { board, liveTetrimino } = prevState
  if (atBottom(liveTetrimino) || collides([board, downOne(liveTetrimino)])) {
    const settledState = {
      board: add([board, liveTetrimino]),
      liveTetrimino: undefined,
      lastAction: 'SETTLED'
    }
    return checkCompleted(settledState)
  } else {
    return {
      liveTetrimino: downOne(liveTetrimino),
      lastAction: 'DROPPED_ONE'
    }
  }
}

function introduceNewTetrimino (prevState) {
  const { board } = prevState
  const newTetrimino = tetriminos.getRandom()
  if (collides([board, newTetrimino])) {
    console.log('YOU LOST')
    return {
      lastAction: 'LOST'
    }
  }
  return {
    liveTetrimino: newTetrimino,
    lastAction: 'NEW_TETRIMINO'
  }
}

function checkCompleted (prevState) {
  const { newTetrix, removed } = removeCompleted(prevState.board)
  return Object.assign({}, prevState, {
    board: newTetrix,
    score: updateScore(prevState.score, removed)
  })
}
