import React, { Component } from 'react'

import GameRow from './GameRow'

class GameBoard extends Component {
  render () {
    return (
      <div className='GameBoard'>
        {this.renderRows()}
      </div>
    )
  }

  renderRows () {
    const { rows } = this.props
    if (!rows) return
    return rows.map((row, i) => <GameRow row={row} key={i} />)
  }
}

export default GameBoard
