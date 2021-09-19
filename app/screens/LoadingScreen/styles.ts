import {StyleSheet} from 'react-native'
import {Colors, Fonts} from '../../theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBrand: {
    fontFamily: Fonts.FONT_FAMILY.ROBOTO_MEDIUM,
    fontSize: 30,
    color: Colors.WHITE,
  },
  logo: {
    width: 156,
    height: 100,
  },
  textVersion: {
    position: 'absolute',
    fontFamily: Fonts.FONT_FAMILY.ROBOTO_MEDIUM,
    color: Colors.WHITE,
    fontSize: 16,
    bottom: 24,
  },
})

export default styles
