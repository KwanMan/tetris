import { getRandom } from './tetriminos'

export default {
  NEXT_TICK (payload, { get, mutate, emit }) {
    const { liveTetrimino } = get()
    if (liveTetrimino) {
      emit('MOVE_DOWN')
    } else {
      emit('INTRODUCE_NEW')
    }
  },
  INTRODUCE_NEW (payload, { get, mutate, emit }) {
    const { board } = get()
    const newTetrimino = getRandom()
    if (board.clashesWith(newTetrimino)) {
      console.log('YOU LOST')
      emit('LOSE')
    } else {
      mutate({
        liveTetrimino: newTetrimino
      })
    }
  },
  MOVE_LEFT (payload, { get, mutate, emit }) {
    const { board, liveTetrimino } = get()
    if (!liveTetrimino) return
    const next = liveTetrimino.left()
    if (liveTetrimino.atLeft() || board.clashesWith(next)) return
    mutate({ liveTetrimino: next })
  },
  MOVE_RIGHT (payload, { get, mutate, emit }) {
    const { board, liveTetrimino } = get()
    if (!liveTetrimino) return
    const next = liveTetrimino.right()
    if (liveTetrimino.atRight() || board.clashesWith(next)) return
    mutate({ liveTetrimino: next })
  },
  MOVE_DOWN (payload, { get, mutate, emit }) {
    const { board, liveTetrimino } = get()
    if (!liveTetrimino) return
    const next = liveTetrimino.down()
    if (liveTetrimino.atBottom() || board.clashesWith(next)) {
      mutate({
        board: board.add(liveTetrimino),
        liveTetrimino: false
      })
      emit('SETTLED')
    } else {
      mutate({ liveTetrimino: next })
    }
  },
  DROP (payload, { get, mutate, emit }) {
    const { board, liveTetrimino } = get()
    if (!liveTetrimino) return
    let current = liveTetrimino
    let next = current.down()
    while (!current.atBottom() && !board.clashesWith(next)) {
      current = next
      next = current.down()
    }
    mutate({
      board: board.add(current),
      liveTetrimino: false
    })
    emit('SETTLED')
  },
  SETTLED (payload, { get, mutate, emit }) {
    return
    const { board } = get()
    mutate({
      board: board.removeCompleted()
    })
  }
}
