import { createStore } from 'redux'
import tetrix from '../gameLogic/tetrix'

export default function store () {
  return createStore(reducer, {
    shape: tetrix([]).raw()
  })
}

function reducer (prevState = {}, action) {
  // console.log('received action: ' + action.type)
  switch (action.type) {
    case 'UPDATE_SHAPE':
      return Object.assign({}, prevState, {
        shape: action.shape
      })

    default:
      return Object.assign({}, prevState)
  }
}
