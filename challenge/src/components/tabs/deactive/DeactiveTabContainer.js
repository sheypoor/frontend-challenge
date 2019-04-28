import {connect} from 'react-redux'
import DeactiveTabPresentation from './DeactiveTabPresentation'
import {getDataForDeactivateTab} from 'challenge/src/actions/GetData'

const mapStateToProps = (state) => ({
  data: state.deactivatedData
})
const mapDispatchToProps = (dispatch) => ({
  getDataForDeactivateTab: (reset) => dispatch(getDataForDeactivateTab(reset))
})

export default connect(mapStateToProps, mapDispatchToProps)(DeactiveTabPresentation)
