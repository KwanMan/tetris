import preact, { Component } from 'preact'
import classnames from 'classnames'

import GameRow from './GameRow'

class GameBoard extends Component {
  render () {
    const className = classnames('GameBoard', this.props.className)
    return (
      <div className={className}>
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
