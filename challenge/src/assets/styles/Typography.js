import {
  Platform,
  StyleSheet
} from 'react-native'

export default StyleSheet.create({
  iranYekanFamily: {
    ...Platform.select({
      ios: {
        fontFamily: 'IRANYekanMobileFaNum'
      },
      android: {
        fontFamily: 'IRANYekanRegularMobile(FaNum)'
      }
    })
  }
})
