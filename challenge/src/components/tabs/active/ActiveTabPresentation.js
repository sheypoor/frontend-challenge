import React, {PureComponent} from 'react'
import {
  FlatList,
  Platform
} from 'react-native'
import Card from 'challenge/src/components/public/card'
import {makeCardsHeight} from 'challenge/src/helper/HelperMethods'

class ActiveTabPresentation extends PureComponent {

  _keyExtractor = (item) => item.human_readable_id

  _renderItem = ({item}) => <Card item={item}/>

  _getItemLayout = (data, index) => makeCardsHeight(index)

  render() {
    const {data} = this.props
    const {
      items
    } = data

    if (items === undefined) return null

    let activeItems = items.filter(
      x => x.status.advertised
    )

    return (
      <FlatList data={activeItems}
                removeClippedSubviews={
                  Platform.OS === 'android'
                }
                getItemLayout={this._getItemLayout}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}/>
    )
  }
}

export default ActiveTabPresentation
