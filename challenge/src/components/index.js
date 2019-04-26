import React, {PureComponent} from 'react'
import {
  View,
  StatusBar
} from 'react-native'
import {connect} from 'react-redux'
import getData from 'challenge/src/actions/GetData'
import Header from 'challenge/src/components/header/HeaderContainer'
import TabNavigator from 'challenge/src/navigation'
import styles from 'challenge/src/assets/styles/Root'

export class Root extends PureComponent {
  constructor(props) {
    super()
    props.getData()
  }

  render() {
    return (
      <View style={styles.root}>
        <StatusBar backgroundColor="#FFF" barStyle="dark-content"/>
        <Header/>
        <TabNavigator/>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(getData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Root)
