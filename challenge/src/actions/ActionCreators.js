import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  RESET_ALL_DATA,
  FETCH_ACTIVE_DATA_FAILURE,
  FETCH_ACTIVE_DATA_REQUEST,
  FETCH_ACTIVE_DATA_SUCCESS,
  RESET_ALL_ACTIVE_DATA,
  FETCH_DEACTIVATE_DATA_FAILURE,
  FETCH_DEACTIVATE_DATA_REQUEST,
  FETCH_DEACTIVATE_DATA_SUCCESS,
  RESET_ALL_DEACTIVATE_DATA
} from './ActionTypes'

export const fetchDataSuccess = (payload) => ({type: FETCH_DATA_SUCCESS, payload})
export const fetchDataFailure = (error) => ({type: FETCH_DATA_FAILURE, error})
export const fetchDataRequest = () => ({type: FETCH_DATA_REQUEST})
export const resetAllData = () => ({type: RESET_ALL_DATA})

export const fetchActiveDataSuccess = (payload) => ({type: FETCH_ACTIVE_DATA_SUCCESS, payload})
export const fetchActiveDataFailure = (error) => ({type: FETCH_ACTIVE_DATA_FAILURE, error})
export const fetchActiveDataRequest = () => ({type: FETCH_ACTIVE_DATA_REQUEST})
export const resetActiveData = () => ({type: RESET_ALL_ACTIVE_DATA})

export const fetchDeactivateDataSuccess = (payload) => ({type: FETCH_DEACTIVATE_DATA_SUCCESS, payload})
export const fetchDeactivateDataFailure = (error) => ({type: FETCH_DEACTIVATE_DATA_FAILURE, error})
export const fetchDeactivateDataRequest = () => ({type: FETCH_DEACTIVATE_DATA_REQUEST})
export const resetDeactivatedData = () => ({type: RESET_ALL_DEACTIVATE_DATA})
