import createAtom from './atom'

export default function Tetris () {
  const atom = createAtom(onChange)
  const newShapeListeners = []
  const newScoreListeners = []
  let interval

  function onChange (state) {
    const { board, liveTetrimino, score } = state
    let shape
    if (liveTetrimino) {
      shape = board.add(liveTetrimino).getVisual()
    } else {
      shape = board.getVisual()
    }

    newShapeListeners.forEach(listener => listener(shape))
    newScoreListeners.forEach(listener => listener(score))
  }

  function userAction (action) {
    if (action === 'DROP') {
      return atom.emit('DROP')
    }
    atom.emit(`MOVE_${action}`)
  }

  function startGame () {
    setTimeout(() => atom.emit('NEXT_TICK'), 0)
    interval = setInterval(() => atom.emit('NEXT_TICK'), 300)
  }

  function stopGame () {
    clearInterval(interval)
    interval = null
  }

  return {
    onNewShape: (listener) => newShapeListeners.push(listener),
    onNewScore: (listener) => newScoreListeners.push(listener),
    userAction,
    startGame,
    stopGame
  }
}
