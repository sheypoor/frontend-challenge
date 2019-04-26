import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST
} from './ActionTypes'

export const fetchDataSuccess = (payload) => ({type: FETCH_DATA_SUCCESS, payload})
export const fetchDataFailure = (error) => ({type: FETCH_DATA_FAILURE, error})
export const fetchDataRequest = () => ({type: FETCH_DATA_REQUEST})
