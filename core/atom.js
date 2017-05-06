import createAtom from 'little-atom'
import createBoard from './board'
import reactors from './reactors'

export default function atom (onMutation) {
  return createAtom({
    board: createBoard(),
    liveTetrimino: false
  }, reactors, onMutation)
}
