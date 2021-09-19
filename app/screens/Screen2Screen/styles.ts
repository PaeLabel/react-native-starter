import {StyleSheet} from 'react-native'
import {Colors, Fonts} from '../../theme'

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  screen2Screen: {
    flex: 1,
  },
  screen2ScreenText: {
    fontFamily: Fonts.FONT_FAMILY.ROBOTO_BOLD,
    fontSize: Fonts.FONT_SIZE.X_SMALL,
    lineHeight: Fonts.getLineHeight(Fonts.FONT_SIZE.X_SMALL),
    color: Colors.TUNDORA,
    textAlign: 'center',
  },
})

export default styles
