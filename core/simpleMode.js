import TetrisCore from './Tetris'

const defaultSettings = {
  tick: 500,
  onNewScore () {},
  onLose () {}
}

export default function Tetris (userSettings) {
  const settings = {
    ...defaultSettings,
    ...userSettings
  }
  let score = 0
  const tetris = TetrisCore({
    onNewShape: settings.onNewShape,
    onLose: settings.onLose,
    tick: settings.tick,
    onLinesRemoved (lines) {
      score += (lines * 100)
      if (lines === 4) score += 100
      settings.onNewScore(score)
      settings.tick = settings.tick - (lines * 5)
    }
  })

  return {
    sendAction: tetris.sendAction,
    startGame: tetris.startGame,
    stopGame: tetris.stopGame
  }
}
