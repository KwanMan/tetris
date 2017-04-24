import React, { Component } from 'react'

import Tetris from '../../core'
import tetrix from '../../core/tetrix'

import GameBoard from '../GameBoard'

const keys = {
  37: 'LEFT',
  38: 'UP',
  39: 'RIGHT',
  40: 'DOWN'
}

class Application extends Component {
  constructor () {
    super()
    this.state = {
      score: 0,
      shape: tetrix([]).raw()
    }
  }
  componentDidMount () {
    const tetris = Tetris()
    tetris.onNewScore(score => this.setState({ score }))
    tetris.onNewShape(shape => this.setState({ shape }))

    document.onkeydown = function (e) {
      const code = e.keyCode
      if (keys[code]) {
        e.preventDefault()
        tetris.userAction(keys[code])
      }
    }
    window.tetris = tetris
    tetris.startGame()
  }
  render () {
    const { shape } = this.state
    return (
      <GameBoard rows={shape} />
    )
  }
}

export default Application
