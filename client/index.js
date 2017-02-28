import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Tetris from './gameLogic'

import Application from './modules/Application'
import createStore from './store/createStore'

const keys = {
  37: 'LEFT',
  38: 'UP',
  39: 'RIGHT',
  40: 'DOWN'
}

const store = createStore()
window.store = store

const tetris = Tetris()

tetris.onNewScore(score => store.dispatch({
  type: 'UPDATE_SCORE',
  score: score
}))

tetris.onNewShape(shape => store.dispatch({
  type: 'UPDATE_SHAPE',
  shape: shape
}))

document.onkeydown = function (e) {
  const code = e.keyCode
  if (keys[code]) {
    e.preventDefault()
    tetris.userAction(keys[code])
  }
};

const root = (
  <Provider store={store}>
    <Application />
  </Provider>
)

render(root, document.getElementById('root'))

window.tetris = tetris
tetris.startGame()