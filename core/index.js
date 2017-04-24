import createStore from './store'
import { add } from './tetrixUtils'

export default function Tetris () {
  const store = createStore()
  const newShapeListeners = []
  const newScoreListeners = []

  store.subscribe(() => {
    const { board, liveTetrimino, score } = store.getState()
    let shape
    if (liveTetrimino) {
      shape = add([board, liveTetrimino]).visual()
    } else {
      shape = board.visual()
    }

    newShapeListeners.forEach(listener => listener(shape))
    newScoreListeners.forEach(listener => listener(score))
  })

  function userAction (action) {
    store.dispatch({
      type: 'USER_ACTION',
      action
    })
  }

  function startGame () {
    setInterval(() => store.dispatch({ type: 'NEXT_TICK' }), 300)
  }

  return {
    onNewShape: (listener) => newShapeListeners.push(listener),
    onNewScore: (listener) => newScoreListeners.push(listener),
    userAction,
    startGame
  }
}