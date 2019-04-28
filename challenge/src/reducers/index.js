import {combineReducers} from 'redux'
import data from 'challenge/src/reducers/DataReducer'
import activeData from 'challenge/src/reducers/ActiveDataReducer'
import deactivatedData from 'challenge/src/reducers/DeactivatedDataReducer'

export default combineReducers({
  data,
  activeData,
  deactivatedData
})
