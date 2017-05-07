import React from 'react'

import GameBoard from './GameBoard'

const Layout = ({ rows, score }) => {
  return (
    <div className='Layout'>
      <GameBoard className='Layout-board' rows={rows} />
      <div className='Layout-score'>{score}</div>
    </div>
  )
}

export default Layout
