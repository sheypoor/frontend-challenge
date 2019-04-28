import PropTypes from 'prop-types'
import React, {PureComponent} from 'react'
import CardList from 'challenge/src/components/public/card/CardList'

class DeactiveTabPresentation extends PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
    getDataForDeactivateTab: PropTypes.func.isRequired
  }

  componentDidMount() {
    const {getDataForDeactivateTab} = this.props
    getDataForDeactivateTab()
  }

  render() {
    const {data, getDataForDeactivateTab} = this.props
    return <CardList data={data}
                     updateList={(reset) =>
                       getDataForDeactivateTab(reset)
                     }/>
  }
}

export default DeactiveTabPresentation
