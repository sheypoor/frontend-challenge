import PropTypes from 'prop-types'
import React, {PureComponent} from 'react'
import CardList from 'challenge/src/components/public/card/CardList'

class ActiveTabPresentation extends PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
    getDataForActiveTab: PropTypes.func.isRequired
  }

  componentDidMount() {
    const {getDataForActiveTab} = this.props
    getDataForActiveTab()
  }

  render() {
    const {data, getDataForActiveTab} = this.props
    return <CardList data={data}
                     updateList={(reset) =>
                       getDataForActiveTab(reset)
                     }/>
  }
}

export default ActiveTabPresentation
