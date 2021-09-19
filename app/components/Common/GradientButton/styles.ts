import {StyleSheet} from 'react-native'
import {Colors, Fonts} from '../../../theme'

const styles = StyleSheet.create({
  button: {
    height: 55,
    borderRadius: 8,
  },
  buttonContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: Fonts.FONT_SIZE.LARGE,
    lineHeight: Fonts.getLineHeight(Fonts.FONT_SIZE.LARGE),
    fontFamily: Fonts.FONT_FAMILY.ROBOTO_BOLD,
    color: Colors.WHITE,
    fontWeight: 'bold',
  },
  buttonDisabled: {
    backgroundColor: Colors.VERYLIGHTPINK,
    borderRadius: 8,
  },
  textDisabled: {
    color: Colors.WHITE,
  },
  iconSpacer: {
    width: 11.5,
  },
})

export default styles
