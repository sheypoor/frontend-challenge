import {Platform} from 'react-native'

export default {
  activeTintColor: '#121925',
  inactiveTintColor: '#81858b',
  labelStyle: {
    fontSize: 18,
    ...Platform.select({
      ios: {
        fontFamily: 'IRANYekanMobileFaNum'
      },
      android: {
        fontFamily: 'IRANYekanRegularMobile(FaNum)'
      }
    })
  },
  indicatorStyle: {
    backgroundColor: '#0084ff',
    height: 4
  },
  style: {
    elevation: 5,
    backgroundColor: '#FFF'
  }
}
