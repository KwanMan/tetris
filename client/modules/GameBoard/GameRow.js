import React from 'react'
import classnames from 'classnames'

function GameRow ({ row }) {
  return (
    <div className='GameRow'>
      {row.map(color => <Tetrimino color={color} />)}
    </div>
  )
}

function Tetrimino ({ color }) {
  const className = classnames({
    Tetrimino: true,
    [`Tetrimino--${color}`]: true,
    'Tetrimino--active': !!color
  })
  return (
    <div className={className} />
  )
}

export default GameRow
