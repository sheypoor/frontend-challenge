import PropTypes from 'prop-types'
import React from 'react'
import styles from 'challenge/src/assets/styles/CardList'
import {makeCardsHeight} from 'challenge/src/helper/HelperMethods'
import {
  ActivityIndicator,
  FlatList,
  Platform,
  RefreshControl,
  View
} from 'react-native'
import Card from 'challenge/src/components/public/card'

export default CardList = (props) => {
  const _keyExtractor = (item) => item.human_readable_id

  const _renderItem = ({item}) => <Card item={item}/>

  const _getItemLayout = (data, index) => makeCardsHeight(index)

  const _getData = (reset = false) => {
    props.updateList(reset)
  }

  const _renderContent = () => {
    const {data} = props
    const {
      items,
      isFetching
    } = data
    if (_.isEmpty(items) && isFetching) {
      return (
        <View style={styles.coverFetchingContainer}>
          <ActivityIndicator size={'small'} color={'#333'}/>
        </View>
      )
    } else if (!_.isEmpty(items)) {
      return (
        <FlatList data={items}
                  removeClippedSubviews={
                    Platform.OS === 'android'
                  }
                  refreshControl={
                    <RefreshControl
                      refreshing={props.isFetching}
                      onRefresh={() => _getData(true)}
                    />
                  }
                  onEndReachedThreshold={15}
                  onEndReached={() => _getData()}
                  getItemLayout={_getItemLayout}
                  keyExtractor={_keyExtractor}
                  renderItem={_renderItem}/>
      )
    } else {
      return null
    }
  }

  return (
    <View style={styles.root}>
      {_renderContent()}
    </View>
  )
}

CardList.propTypes = {
  data: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  updateList: PropTypes.func.isRequired
}

CardList.defaultProps = {
  isFetching: false
}
