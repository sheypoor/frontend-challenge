import {connect} from 'react-redux'
import AllTabPresentation from './AllTabPresentation'
import {getDataForAllTab} from 'challenge/src/actions/GetData'

const mapStateToProps = (state) => ({
  data: state.data
})

const mapDispatchToProps = (dispatch) => ({
  getDataForAllTab: (reset) => dispatch(getDataForAllTab(reset))
})

export default connect(mapStateToProps, mapDispatchToProps)(AllTabPresentation)
