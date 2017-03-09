import { combineReducers } from 'redux'
import currentTab from './currentTab'
import currentPiece from './currentPiece'
import pieces from './pieces'

const app = combineReducers({
  currentTab,
  currentPiece,
  pieces,
})

export default app

export const getFilteredPieces = ({ pieces, currentTab }) =>
  pieces.allIds.filter(id => pieces.byId[id].tabId === currentTab)
