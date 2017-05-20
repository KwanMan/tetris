import createAtom from 'little-atom'

import TetrisCore from './core'

const actions = {
  32: 'drop', // Space
  37: 'left', // Left arrow
  38: 'rotate', // Up arrow
  39: 'right', // Right arrow
  40: 'down' // Down arrow
}

const options = {
  initialTick: 500
}

export default function createTetris (render) {
  const initialState = {
    score: 0,
    tick: options.initialTick,
    linesRemoved: 0
  }
  const atom = createAtom(initialState, {
    updateShape ({ mutate }, shape) {
      mutate({ shape })
    },
    removeLines ({ get, mutate, actions }, lines) {
      const state = get()
      const score = state.score + ((Math.pow(2, lines) / 2) * 100)
      const linesRemoved = state.linesRemoved + lines
      const tick = initialState.tick - (5 * linesRemoved)
      mutate({ score, linesRemoved, tick })
      tetris.setTick(tick)
    }
  }, render)

  const tetris = TetrisCore({
    tick: initialState.tick,
    onNewShape: atom.actions.updateShape,
    onLinesRemoved: atom.actions.removeLines,
    onLose () {}
  })

  document.onkeydown = function (e) {
    const code = e.keyCode
    const action = actions[code]
    if (action) {
      e.preventDefault()
      tetris.sendAction[action]()
    }
  }

  return tetris
}
