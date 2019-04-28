import PropTypes from 'prop-types'
import React, {PureComponent} from 'react'
import CardList from 'challenge/src/components/public/card/CardList'

class AllTabPresentation extends PureComponent {
  static defaultProps = {
    getDataForAllTab: () => {
    }
  }

  static propTypes = {
    data: PropTypes.object.isRequired,
    getDataForAllTab: PropTypes.func.isRequired
  }

  componentDidMount() {
    const {getDataForAllTab} = this.props
    getDataForAllTab()
  }

  render() {
    const {data, getDataForAllTab} = this.props
    return <CardList data={data}
                     updateList={(reset) =>
                       getDataForAllTab(reset)
                     }/>
  }
}

export default AllTabPresentation
