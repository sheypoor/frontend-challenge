import React from 'react'
import {
  TouchableOpacity,
  View
} from 'react-native'
import {CustomText} from 'challenge/src/components/public/typography/CustomText'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import styles from 'challenge/src/assets/styles/Card'

const CardFooter = () => {
  return (
    <View style={styles.cardFooter}>
      <TouchableOpacity style={styles.footerItem}>
        <Icon name={'trash'}
              size={14}
              color={'#0084ff'}
              allowFontScaling={true}/>
        <CustomText style={styles.footerItemTxt}
                    numberOfLines={1}>
          حذف
        </CustomText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerItem}>
        <Icon name={'pen'}
              size={14}
              color={'#0084ff'}
              allowFontScaling={true}/>
        <CustomText style={styles.footerItemTxt}
                    numberOfLines={1}>
          ویرایش
        </CustomText>
      </TouchableOpacity>
      <TouchableOpacity style={[
        styles.footerItem,
        styles.noBorder
      ]}>
        <Icon name={'chart-line'}
              size={16}
              color={'#0084ff'}
              allowFontScaling={true}/>
        <CustomText style={styles.footerItemTxt}
                    numberOfLines={1}>
          افزایش بازدید
        </CustomText>
      </TouchableOpacity>
    </View>
  )
}

export default CardFooter
