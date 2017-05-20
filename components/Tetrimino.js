import preact from 'preact'
import classnames from 'classnames'

const Tetrimino = ({ color }) => {
  const className = classnames({
    Tetrimino: true,
    [`Tetrimino--${color}`]: true,
    'Tetrimino--active': !!color
  })
  return (
    <div className={className} />
  )
}

export default Tetrimino
