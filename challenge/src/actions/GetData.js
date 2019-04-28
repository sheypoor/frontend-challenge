import * as creators from 'challenge/src/actions/ActionCreators'
import loadData from 'challenge/src/sdk'

export const getDataForAllTab = (reset = false) => (dispatch, getState) => {
  if (reset) {
    dispatch(creators.resetAllData())
  }

  let skipped = getState().data.skipped
  let body = {skipped: skipped, size: 20}
  if (skipped < 2000) {
    dispatch(creators.fetchDataRequest())
    loadData(body)
      .then((value) => dispatch(creators.fetchDataSuccess(value)))
      .catch((err) => dispatch(creators.fetchDataFailure(err)))
  } else {
    alert('Good job, You Reached end of list.')
  }
}

export const getDataForDeactivateTab = (reset = false) => (dispatch, getState) => {
  if (reset) {
    dispatch(creators.resetDeactivatedData())
  }
  dispatch(creators.fetchDeactivateDataRequest())

  let skipped = getState().data.skipped
  let body = {skipped: skipped, size: 20}
  if (skipped < 2000) {
    loadData(body)
      .then((value) => dispatch(creators.fetchDeactivateDataSuccess(value)))
      .catch((err) => dispatch(creators.fetchDeactivateDataFailure(err)))
  } else {
    alert('Good job, You Reached end of list.')
  }
}

export const getDataForActiveTab = (reset = false) => (dispatch, getState) => {
  if (reset) {
    dispatch(creators.resetActiveData())
  }
  dispatch(creators.fetchActiveDataRequest())

  let skipped = getState().data.skipped
  let body = {skipped: skipped, size: 20}
  if (skipped < 2000) {
    loadData(body)
      .then((value) => dispatch(creators.fetchActiveDataSuccess(value)))
      .catch((err) => dispatch(creators.fetchActiveDataFailure(err)))
  } else {
    alert('Good job, You Reached end of list.')
  }
}
