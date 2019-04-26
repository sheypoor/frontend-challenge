import React from 'react'
import {priceSeparator} from 'challenge/src/helper/HelperMethods'
import {
  Image,
  View
} from 'react-native'
import {CustomText} from 'challenge/src/components/public/typography/CustomText'
import styles from 'challenge/src/assets/styles/Card'

const CardItem = (props) => {
  const {item} = props

  // TODO: After implement fully images url, should use item.image object to render images [L: 18]
  return (
    <View style={styles.cardItem}>
      <View>
        <Image style={styles.image}
               source={{uri: 'http://i.pravatar.cc/200'}}/>
        <View style={styles.statusMark}>
          <CustomText style={styles.statusMarkTxt}>
            {item.status.title}
          </CustomText>
        </View>
      </View>
      <View style={styles.leftColumn}>
        <CustomText style={styles.titleTxt}>
          {item.title}
        </CustomText>
        <CustomText style={styles.packageStatusTxt}>
          ویترین تا ۴۸ ساعت
        </CustomText>
        <View style={styles.priceHolder}>
          <CustomText style={styles.priceTxt}>
            {priceSeparator(item.price.value)}
          </CustomText>
          <CustomText style={styles.unitText}>
            {item.price.unit}
          </CustomText>
        </View>
      </View>
    </View>
  )
}

export default CardItem
