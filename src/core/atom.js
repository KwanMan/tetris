import createAtom from 'little-atom'
import createBoard from './board'
import createActions from './actions'

export default function atom ({ onNewShape, onLinesRemoved, onLose }) {
  return createAtom({
    board: createBoard(),
    liveTetrimino: false
  }, createActions({
    onLinesRemoved,
    onLose
  }), onMutation)

  function onMutation ({ board, liveTetrimino }) {
    let shape
    if (liveTetrimino) {
      shape = board.add(liveTetrimino).getVisual()
    } else {
      shape = board.getVisual()
    }

    onNewShape(shape)
  }
}
