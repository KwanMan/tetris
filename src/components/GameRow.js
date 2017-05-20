import preact from 'preact'

import Tetrimino from './Tetrimino'

const GameRow = ({ row }) => {
  return (
    <div className='GameRow'>
      {row.map((color, i) => <Tetrimino color={color} key={i} />)}
    </div>
  )
}

export default GameRow
