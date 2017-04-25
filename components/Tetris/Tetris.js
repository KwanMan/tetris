import React, { Component } from 'react'

import TetrisCore from '../../core'
import tetrix from '../../core/tetrix'

import GameBoard from '../GameBoard'

const keys = {
  32: 'DROP', // Space
  37: 'LEFT',
  38: 'ROTATE', // Up arrow
  39: 'RIGHT',
  40: 'DOWN'
}

class Tetris extends Component {
  constructor () {
    super()
    this.state = {
      score: 0,
      shape: tetrix([]).raw()
    }
  }

  componentDidMount () {
    const tetris = TetrisCore()
    tetris.onNewScore(score => this.setState({ score }))
    tetris.onNewShape(shape => this.setState({ shape }))

    document.onkeydown = function (e) {
      const code = e.keyCode
      if (keys[code]) {
        e.preventDefault()
        tetris.userAction(keys[code])
      }
    }

    tetris.startGame()
    this.tetris = tetris
  }

  componentWillUnmount () {
    this.tetris.stopGame()
  }

  render () {
    const { shape } = this.state
    return (
      <GameBoard rows={shape} />
    )
  }
}

export default Tetris
