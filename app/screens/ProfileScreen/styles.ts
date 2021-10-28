import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../theme'

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  profileScreen: {
    flex: 1,
    padding: 24,
  },
  profileScreenText: {
    fontFamily: Fonts.FONT_FAMILY.ROBOTO_BOLD,
    fontSize: Fonts.FONT_SIZE.X_LARGE,
    lineHeight: Fonts.getLineHeight(Fonts.FONT_SIZE.X_LARGE),
    color: Colors.TUNDORA,
    textAlign: 'center',
  },
})

export default styles
