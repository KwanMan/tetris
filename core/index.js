import createAtom from './atom'

export default function Tetris () {
  const atom = createAtom(onChange)
  const newShapeListeners = []
  let interval

  function onChange (state) {
    const { board, liveTetrimino } = state
    let shape
    if (liveTetrimino) {
      shape = board.add(liveTetrimino).getVisual()
    } else {
      shape = board.getVisual()
    }

    newShapeListeners.forEach(listener => listener(shape))
  }

  function userAction (action) {
    atom.emit(action)
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
    userAction,
    startGame,
    stopGame
  }
}
