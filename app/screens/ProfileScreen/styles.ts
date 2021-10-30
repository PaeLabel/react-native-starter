import { StyleSheet } from 'react-native'
import { Colors, Theme } from '../../theme'
import FONTS from '../../theme/Fonts'

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  profileScreen: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    // ...Theme.screen,
  },
  contentContainerStyle: {
    paddingBottom: 55,
  },
  wrapUserData: {
    padding: 20,
    paddingTop: 15,
    paddingBottom: 10,
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapUserLeft: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  wrapImage: {
  },
  imageUser: {
    marginLeft: 5,
    height: 50,
    maxHeight: 50,
    width: 50,
    maxWidth: 50,
    borderRadius: 10
  },
  wrapProfileText: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  profileScreenText: {
    ...Theme.text.header1,
    color: Theme.colors.text,
    textAlign: 'left',
  },
  profileDescText: {
    ...Theme.text.description,
    color: Theme.colors.iconText,
    textAlign: 'left',
  },
  wrapEditButton: {
    // flex: 1,
    flexDirection: 'row',
  },
  EditText: {
    ...Theme.text.subDescription,
    color: Theme.colors.iconText,
    textAlign: 'left',
    marginRight: 5,
  },
  wrapList: {
    marginTop: 15,
    borderBottomColor: Theme.colors.border,
    borderBottomWidth: 1,
    marginHorizontal: 10,
  },
  listContainer: {
    backgroundColor: Colors.WHITE,
    width: '100%',
    height: 60,
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between'
  },
  listIcon: {
    marginLeft: 5,
  },
  listText: {
    ...Theme.text.title,
    color: Theme.colors.text,
    textAlign: 'left',
    marginLeft: 10,
  },
  wrapListLeft: {
    flexDirection: 'row',
  },
  versionText: {
    padding: 10,
    fontFamily: FONTS.FONT_FAMILY.ROBOTO_REGULAR,
    fontSize: FONTS.FONT_SIZE.XX_SMALL,
    color: '#7B858E',
    textAlign: 'center',
    marginBottom: 5,
  }
})

export default styles
