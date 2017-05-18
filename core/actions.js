import { getRandom } from './tetriminos'

export default function createReactors ({ onLinesRemoved, onLose }) {
  return {
    nextTick ({ get, actions }) {
      const { liveTetrimino } = get()
      if (liveTetrimino) {
        actions.down()
      } else {
        actions.introduceNew()
      }
    },
    introduceNew ({ get, mutate }) {
      const { board } = get()
      const newTetrimino = getRandom()
      if (board.clashesWith(newTetrimino)) {
        console.log('you lose')
        onLose()
      } else {
        mutate({
          liveTetrimino: newTetrimino
        })
      }
    },
    rotate ({ get, mutate }) {
      const { board, liveTetrimino } = get()
      if (!liveTetrimino) return
      const next = liveTetrimino.clockwise()
      if (next.outOfBounds() || board.clashesWith(next)) return
      mutate({ liveTetrimino: next })
    },
    left ({ get, mutate }) {
      const { board, liveTetrimino } = get()
      if (!liveTetrimino) return
      const next = liveTetrimino.left()
      if (liveTetrimino.atLeft() || board.clashesWith(next)) return
      mutate({ liveTetrimino: next })
    },
    right ({ get, mutate }) {
      const { board, liveTetrimino } = get()
      if (!liveTetrimino) return
      const next = liveTetrimino.right()
      if (liveTetrimino.atRight() || board.clashesWith(next)) return
      mutate({ liveTetrimino: next })
    },
    down ({ get, mutate, actions }) {
      const { board, liveTetrimino } = get()
      if (!liveTetrimino) return
      const next = liveTetrimino.down()
      if (liveTetrimino.atBottom() || board.clashesWith(next)) {
        mutate({
          board: board.add(liveTetrimino),
          liveTetrimino: false
        })
        actions.settled()
      } else {
        mutate({ liveTetrimino: next })
      }
    },
    drop ({ get, mutate, actions }) {
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
      actions.settled()
    },
    settled ({ get, mutate }) {
      const { board } = get()
      const { board: newBoard, removed } = board.removeCompleted()
      if (removed) {
        onLinesRemoved(removed)
        mutate({ board: newBoard })
      }
    }
  }
}
