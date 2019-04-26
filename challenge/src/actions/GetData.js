import * as creators from 'challenge/src/actions/ActionCreators'
import loadData from 'challenge/src/sdk'

export default () => (dispatch) => {
  dispatch(creators.fetchDataRequest())

  let body = {skipped: 0, size: 20}
  loadData(body)
    .then((value) => dispatch(creators.fetchDataSuccess(value)))
    .catch((err) => dispatch(creators.fetchDataFailure(err)))

}
