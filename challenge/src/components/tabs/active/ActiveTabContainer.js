import {connect} from 'react-redux'
import ActiveTabPresentation from './ActiveTabPresentation'
import {getDataForActiveTab} from 'challenge/src/actions/GetData'

const mapStateToProps = (state) => ({
  data: state.activeData
})
const mapDispatchToProps = (dispatch) => ({
  getDataForActiveTab: (data) => dispatch(getDataForActiveTab())
})
export default connect(mapStateToProps, mapDispatchToProps)(ActiveTabPresentation)
