import {StyleSheet} from 'react-native'
import {Colors, Fonts} from '../../../theme'

const styles = StyleSheet.create({
  box: {
    height: 50,
    padding: 18,
    backgroundColor: Colors.AZURE,
  },
  boxText: {
    fontFamily: Fonts.FONT_FAMILY.ROBOTO_BOLD,
    fontSize: Fonts.FONT_SIZE.X_SMALL,
    lineHeight: Fonts.getLineHeight(Fonts.FONT_SIZE.X_SMALL),
    color: Colors.TUNDORA,
    textAlign: 'center',
  },
})

export default styles
