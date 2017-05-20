import preact from 'preact'

import Layout from './components/Layout'
import createTetris from './createTetris'

const tetris = createTetris(render)

const root = document.querySelector('.root')
function render ({ score, shape }) {
  preact.render(<Layout score={score} rows={shape} />, root, root.lastChild)
}

render({ score: 0 })

tetris.startGame()
