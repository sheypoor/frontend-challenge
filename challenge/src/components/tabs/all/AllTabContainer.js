import {connect} from 'react-redux'
import AllTabPresentation from './AllTabPresentation'

const mapStateToProps = (state) => ({
  data: state.data
})

export default connect(mapStateToProps)(AllTabPresentation)
