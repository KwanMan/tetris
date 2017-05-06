import { BOARD_WIDTH } from './constants'

export default function tetrix (coords, location, colour) {
  const [ x, y ] = location
  const real = coords.map(([ xOffset, yOffset ]) => [ x + xOffset, y + yOffset ])

  function transform (fn) {
    const newCoords = coords.map(([ x, y ]) => fn(x, y))
    return tetrix(newCoords, location, colour)
  }

  function translate (fn) {
    const [ x, y ] = location
    return tetrix(coords, fn(x, y), colour)
  }

  return {
    getCoords () {
      return real.slice(0)
    },
    getColour () {
      return colour
    },
    atBottom () {
      return real.some(([ x, y ]) => y === 0)
    },
    atLeft () {
      return real.some(([ x, y ]) => x === 0)
    },
    atRight () {
      return real.some(([ x, y ]) => x === (BOARD_WIDTH - 1))
    },
    outOfBounds () {
      return real.some(([ x, y ]) => x < 0 || x >= BOARD_WIDTH || y < 0)
    },
    down () {
      return translate((x, y) => [ x, y - 1 ])
    },
    left () {
      return translate((x, y) => [ x - 1, y ])
    },
    right () {
      return translate((x, y) => [ x + 1, y ])
    },
    clockwise () {
      return transform((x, y) => [ y, -x ])
    },
    anticlockwise () {
      return transform((x, y) => ([ -y, x ]))
    }
  }
}
