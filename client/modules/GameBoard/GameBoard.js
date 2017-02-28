import React, { Component } from 'react'
import { connect } from 'react-redux'

import GameRow from './GameRow'

import './GameBoard.css'

const mapStateToProps = (state) => {
  const { shape } = state
  return {
    rows: shape
  }
}

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
    return rows.map(row => <GameRow row={row} />)
  }
}

export default connect(mapStateToProps)(GameBoard)
