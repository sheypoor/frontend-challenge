import {
  StyleSheet,
  Dimensions
} from 'react-native'

const WINDOW_WIDTH = Dimensions.get('screen').width
const IMAGE_WIDTH = (WINDOW_WIDTH / 2) - 10
const IMAGE_HEIGHT = (WINDOW_WIDTH / 2) - 10

export default StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    borderRadius: 4,
    marginBottom: 10,
    marginVertical: 5,
    elevation: 5
  },
  cardItem: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    padding: 10
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    maxWidth: 180,
    maxHeight: 180,
    borderRadius: 4
  },
  statusMark: {
    width: IMAGE_WIDTH,
    maxWidth: 180,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    height: 40,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    backgroundColor: '#ffc000'
  },
  statusMarkTxt: {
    color: '#424750',
    fontSize: 18
  },
  leftColumn: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  titleTxt: {
    flexWrap: 'wrap',
    color: '#030a17',
    fontSize: 18
  },
  packageStatusTxt: {
    color: '#81858b',
    fontSize: 13
  },
  priceHolder: {
    flexDirection: 'row-reverse'
  },
  unitText: {
    color: '#888c91',
    fontSize: 16,
    marginHorizontal: 5
  },
  priceTxt: {
    color: '#777a80',
    fontSize: 17
  },
  cardFooter: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#f7f7f8',
    marginHorizontal: 10
  },
  footerItem: {
    height: 40,
    justifyContent: 'center',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    flex: 1,
    borderLeftWidth: 1,
    borderLeftColor: '#f7f7f8',
    marginVertical: 5
  },
  footerItemTxt: {
    fontSize: 15,
    color: '#0084ff',
    marginHorizontal: 6.5
  },
  noBorder: {
    borderLeftWidth: 0,
    borderRightWidth: 0
  }
})
