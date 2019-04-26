import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    paddingHorizontal: 30,
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  profileImg: {
    width: 40,
    height: 40,
    borderRadius: 22.5,
    borderWidth: 2,
    borderColor: '#dcddde'
  },
  profileInfoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row-reverse'
  },
  nameTxt: {
    fontSize: 18,
    paddingHorizontal: 10,
    color: '#121925'
  }
})
