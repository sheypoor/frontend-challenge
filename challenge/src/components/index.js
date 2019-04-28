import React, {PureComponent} from 'react'
import {
  StatusBar,
  SafeAreaView
} from 'react-native'
import Header from 'challenge/src/components/header/HeaderContainer'
import TabNavigator from 'challenge/src/navigation'
import styles from 'challenge/src/assets/styles/Root'

class Root extends PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.root}>
        <StatusBar backgroundColor="#FFF"
                   barStyle="dark-content"/>
        <Header/>
        <TabNavigator/>
      </SafeAreaView>
    )
  }
}

export default Root
