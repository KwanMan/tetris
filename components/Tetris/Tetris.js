import React, { Component } from 'react'

import TetrisCore from '../../core/simpleMode'
import board from '../../core/board'

import GameBoard from '../GameBoard'

const actions = {
  32: 'drop', // Space
  37: 'left', // Left arrow
  38: 'rotate', // Up arrow
  39: 'right', // Right arrow
  40: 'down' // Down arrow
}

class Tetris extends Component {
  constructor () {
    super()
    this.state = {
      score: 0,
      shape: board().getVisual()
    }
  }

  componentDidMount () {
    const self = this
    const tetris = TetrisCore({
      onNewShape (shape) { self.setState({ shape }) },
      onNewScore (score) { self.setState({ score }) }
    })

    document.onkeydown = function (e) {
      const code = e.keyCode
      const action = actions[code]
      if (action) {
        e.preventDefault()
        tetris.sendAction[action]()
      }
    }

    tetris.startGame()
    this.tetris = tetris
  }

  componentWillUnmount () {
    this.tetris.stopGame()
  }

  render () {
    const { shape, score } = this.state
    return (
      <div>
        <GameBoard rows={shape} />
        <div>{`score is ${score}`}</div>
      </div>
    )
  }
}

export default Tetris
