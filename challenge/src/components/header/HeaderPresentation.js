import React, {Component} from 'react'
import {
  Image,
  TouchableOpacity,
  View
} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import {CustomText} from 'challenge/src/components/public/typography/CustomText'
import styles from 'challenge/src/assets/styles/Header'

class HeaderPresentation extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Icon name={'cog'}
                size={24}
                color={'#424750'}
                allowFontScaling={true}/>
        </TouchableOpacity>
        <View style={styles.profileInfoContainer}>
          <Image style={styles.profileImg}
                 source={{uri: 'http://i.pravatar.cc/300'}}/>
          <CustomText style={styles.nameTxt}>
            رضا سعادتی پور
          </CustomText>
        </View>
        <TouchableOpacity>
          <Icon name={'bars'}
                size={24}
                color={'#424750'}
                allowFontScaling={true}/>
        </TouchableOpacity>
      </View>
    )
  }
}

export default HeaderPresentation
