import {connect} from 'react-redux'
import DeactiveTabPresentation from './DeactiveTabPresentation'

const mapStateToProps = (state) => ({
  data: state.data
})

export default connect(mapStateToProps)(DeactiveTabPresentation)
