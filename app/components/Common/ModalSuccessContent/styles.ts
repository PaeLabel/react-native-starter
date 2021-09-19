import {StyleSheet} from 'react-native'
import {Colors, Fonts} from '../../../theme'

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
    padding: 30,
    width: 315,
    minHeight: 283,
  },
  modalIconWrapper: {
    alignSelf: 'center',
  },
  textModalTitle: {
    textAlign: 'center',
    fontSize: Fonts.FONT_SIZE.X_LARGE,
    lineHeight: Fonts.getLineHeight(Fonts.FONT_SIZE.X_LARGE),
    fontFamily: Fonts.FONT_FAMILY.ROBOTO_BOLD,
    color: Colors.AQUAMARINE,
    marginTop: 20,
    fontWeight: 'bold',
  },
  textModalDescription: {
    textAlign: 'center',
    fontSize: Fonts.FONT_SIZE.MEDIUM,
    lineHeight: Fonts.getLineHeight(Fonts.FONT_SIZE.MEDIUM),
    fontFamily: Fonts.FONT_FAMILY.ROBOTO_REGULAR,
    color: Colors.GREYISHBROWN,
    marginTop: 8,
    marginBottom: 30,
  },
})

export default styles
