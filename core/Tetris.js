import createAtom from './atom'
import { once } from '../utils'

const defaultSettings = {
  tick: 500,
  onNewShape () {},
  onLinesRemoved () {},
  onLose () {}
}

export default function Tetris (userSettings) {
  const settings = {...defaultSettings, ...userSettings}

  const atom = createAtom({
    ...settings,
    onLose () {
      stopGame()
      settings.onLose()
    }
  })
  let finished = false

  return {
    sendAction: createActions(atom),
    startGame: once(next, 'Game already started'),
    stopGame,
    setTick
  }

  function next () {
    if (finished) return
    atom.emit('NEXT_TICK')
    setTimeout(next, settings.tick)
  }

  function stopGame () {
    finished = true
  }

  function setTick (tick) {
    settings.tick = tick
  }
}

function createActions (atom) {
  const actions = ['rotate', 'left', 'right', 'down', 'drop']
  return actions.reduce((memo, action) => {
    return {
      ...memo,
      [action] () { atom.emit(action.toUpperCase()) }
    }
  }, {})
}
