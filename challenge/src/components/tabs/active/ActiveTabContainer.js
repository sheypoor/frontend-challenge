import {connect} from 'react-redux'
import ActiveTabPresentation from './ActiveTabPresentation'

const mapStateToProps = (state) => ({
  data: state.data
})

export default connect(mapStateToProps)(ActiveTabPresentation)
