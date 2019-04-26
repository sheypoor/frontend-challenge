import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_FAILURE,
  FETCH_DATA_SUCCESS
} from 'challenge/src/actions/ActionTypes'

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        isFetching: true
      }
    case FETCH_DATA_SUCCESS:
      return {
        isFetching: false,
        ...action.payload
      }
    case FETCH_DATA_FAILURE:
      return {
        isFetching: false,
        ...action.error
      }
    default :
      return state
  }
}

const initialState = {
  isFetching: false
}
