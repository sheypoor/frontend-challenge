import {
  FETCH_ACTIVE_DATA_REQUEST,
  FETCH_ACTIVE_DATA_FAILURE,
  FETCH_ACTIVE_DATA_SUCCESS,
  RESET_ALL_ACTIVE_DATA
} from 'challenge/src/actions/ActionTypes'

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACTIVE_DATA_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case RESET_ALL_ACTIVE_DATA:
      return initialState
    case FETCH_ACTIVE_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: [
          ...state.items,
          ...action.payload.items
        ],
        skipped: action.payload.size
      }
    case FETCH_ACTIVE_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    default :
      return state
  }
}

const initialState = {
  isFetching: false,
  items: [],
  size: 20,
  skipped: 0,
  total: 2000,
  error: null
}
