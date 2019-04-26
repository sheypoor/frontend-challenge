import React, {PureComponent} from 'react'
import {
  ActivityIndicator,
  FlatList,
  Platform,
  View
} from 'react-native'
import Card from 'challenge/src/components/public/card'
import styles from './styles'
import {makeCardsHeight} from 'challenge/src/helper/HelperMethods'

class AllTabPresentation extends PureComponent {
  _keyExtractor = (item) => item.human_readable_id

  _renderItem = ({item}) => <Card item={item}/>

  _getItemLayout = (data, index) => makeCardsHeight(index)

  _renderContent = () => {
    const {data} = this.props
    const {
      items,
      isFetching
    } = data
    if (isFetching) {
      return (
        <View style={styles.coverFetchingContainer}>
          <ActivityIndicator size={'small'}/>
        </View>
      )
    } else if (items !== undefined) {
      return (
        <FlatList data={items}
                  removeClippedSubviews={
                    Platform.OS === 'android'
                  }
                  getItemLayout={this._getItemLayout}
                  keyExtractor={this._keyExtractor}
                  renderItem={this._renderItem}/>
      )
    } else {
      return null
    }
  }

  render() {
    return (
      <View style={styles.root}>
        {this._renderContent()}
      </View>
    )
  }
}

export default AllTabPresentation
