import React from 'react'
import {View} from 'react-native'
import CardItem from 'challenge/src/components/public/card/CardItem'
import CardFooter from 'challenge/src/components/public/card/CardFooter'
import styles from 'challenge/src/assets/styles/Card'

export default (props) => {
  const {item} = props
  return (
    <View style={styles.card}>
      <CardItem item={item}/>
      <CardFooter/>
    </View>
  )
}
